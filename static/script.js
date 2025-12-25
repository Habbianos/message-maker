const textarea = document.querySelector('textarea[name="message"]');
const preview = document.getElementById('preview');
const charCountElement = document.getElementById('charCount');
const lineCountElement = document.getElementById('lineCount');
const styleInputs = document.querySelectorAll('input[name="estilo"]');
const splitLinesBtn = document.querySelector('input[value="Split line"]');
const alignCenterBtn = document.querySelector('input[value="Align line Center"]');
const alignRightBtn = document.querySelector('input[value="Align line Right"]');
const alignMiddleBtn = document.querySelector('input[value="Align text Middle"]');
const columnifyBtn = document.querySelector('input[value="Collumnify"]');

let currentStyle = 'sticky_white';
let previewElement = null;

// Style configurations with positioning and dimensions
const styleConfigs = {
    gift: { left: 28, top: -12, width: 187, height: 85, maxChars: 140, maxLines: 5 },
    sticky_white: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    sticky_dream: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    sticky_heart: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    sticky_lovin: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    sticky_shakespeare: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    sticky_xmas: { left: 2, top: 2, width: 171, height: 135, maxChars: 300, maxLines: 13 },
    trophy_gold: { left: 2, top: -5, width: 295, height: 109, maxChars: 500, maxLines: 8 },
    trophy_silver: { left: 2, top: -5, width: 295, height: 109, maxChars: 500, maxLines: 8 },
    trophy_bronze: { left: 2, top: -5, width: 295, height: 109, maxChars: 500, maxLines: 8 }
};

// Create preview element
function createPreviewElement() {
    if (previewElement) {
        preview.removeChild(previewElement);
    }
    
    const config = styleConfigs[currentStyle];
    previewElement = document.createElement('div');
    // previewElement.style.left = config.left + 'px';
	// previewElement.style.top = config.top + 'px';
	previewElement.style.transform = `translate(calc(-50% + ${config.left}px), calc(-50% + ${config.top}px))`;
    previewElement.style.width = config.width + 'px';
    previewElement.style.height = config.height + 'px';
    
    preview.appendChild(previewElement);
}

// Update preview with textarea content
function updatePreview() {
    if (!previewElement) {
        createPreviewElement();
    }
	previewElement.textContent = textarea.value;
	updateCounters();
}

// Get current cursor line number
function getCurrentLine() {
    const cursorPos = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPos);
    return textBeforeCursor.split('\n').length - 1;
}

function saveCursorPosition() {
    return textarea.selectionStart;
}

function restoreCursorPosition(pos) {
    if (pos == null) return;

    textarea.focus();
    textarea.setSelectionRange(pos, pos);
}

function getLineStartIndex(line) {
    let idx = 0;
    const lines = textarea.value.split('\n');

    for (let i = 0; i < line; i++) {
        idx += lines[i].length + 1; // +1 for '\n'
    }

    return idx;
}

// Get line text by index
function getLineText(lineIndex) {
    const lines = textarea.value.split('\n');
    return lines[lineIndex] || '';
}

// Replace line text
function replaceLineText(lineIndex, newText) {
    const lines = textarea.value.split('\n');
    lines[lineIndex] = newText;
    textarea.value = lines.join('\n');
    updatePreview();
}

// Measure text width in preview element
function measureTextWidth(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const style = window.getComputedStyle(previewElement);
    context.font = style.fontSize + ' ' + style.fontFamily;
    return context.measureText(text).width;
}

function calculateWrappedLineCount() {
    if (!previewElement) return 0;
    
    const text = textarea.value;
    if (!text) return 0;
    
    const config = styleConfigs[currentStyle];
    const maxWidth = config.width;
    
    const lines = text.split('\n');
    let totalWrappedLines = 0;
    
    for (const line of lines) {
        if (!line) {
            totalWrappedLines++;
            continue;
        }
        
        let currentLineText = '';
        let wrappedLinesInThisLine = 0;
        
        for (let i = 0; i < line.length; i++) {
            const testLine = currentLineText + line[i];
            
            if (measureTextWidth(testLine) > maxWidth && currentLineText) {
                wrappedLinesInThisLine++;
                currentLineText = line[i];
            } else {
                currentLineText = testLine;
            }
        }
        
        if (currentLineText) {
            wrappedLinesInThisLine++;
        }
        
        totalWrappedLines += wrappedLinesInThisLine;
    }
    
    return totalWrappedLines;
}

function updateCounters() {
    if (!charCountElement || !lineCountElement) return;
    
    const config = styleConfigs[currentStyle];
    const charCount = textarea.value.length;
    const lineCount = calculateWrappedLineCount();
    
    // Update character count
    charCountElement.textContent = `${charCount}/${config.maxChars}`;
    if (charCount > config.maxChars) {
        charCountElement.style.color = 'red';
    } else {
        charCountElement.style.color = '';
    }
    
    // Update line count
    lineCountElement.textContent = `${lineCount}/${config.maxLines}`;
    if (lineCount > config.maxLines) {
        lineCountElement.style.color = 'red';
    } else {
        lineCountElement.style.color = '';
    }
}

// Split lines at wrap points
function splitLines() {
    const cursorPos = saveCursorPosition();
    const currentLine = getCurrentLine();
    if (currentLine === null) return;

    const lineStart = getLineStartIndex(currentLine);
    const originalLine = getLineText(currentLine);

    if (!originalLine.trim()) return;

    const cursorOffsetInLine =
        cursorPos != null ? cursorPos - lineStart : null;

    const config = styleConfigs[currentStyle];
    const maxWidth = config.width;

    const newLines = [];
    let currentLineText = '';

    for (let i = 0; i < originalLine.length; i++) {
        const testLine = currentLineText + originalLine[i];

        if (measureTextWidth(testLine) + 2 > maxWidth && currentLineText) {
            newLines.push(currentLineText);
            currentLineText = originalLine[i];
        } else {
            currentLineText = testLine;
        }
    }

    if (currentLineText) newLines.push(currentLineText);

    const lines = textarea.value.split('\n');
    lines.splice(currentLine, 1, ...newLines);
    textarea.value = lines.join('\n');
    updatePreview();

    // ── cursor remapping ──────────────────────────────
    if (cursorOffsetInLine != null) {
        let remaining = cursorOffsetInLine;
        let targetLine = currentLine;
        let targetOffset = 0;

        for (const line of newLines) {
            if (remaining <= line.length) {
                targetOffset = remaining;
                break;
            }
            remaining -= line.length;
            targetLine++;
        }

        restoreCursorPosition(
            getLineStartIndex(targetLine) +
            Math.max(0, targetOffset)
        );
    }
}

// Align line center
function alignLineCenter() {
    const cursorPos = saveCursorPosition();
	const currentLine = getCurrentLine();
	const lineStart = getLineStartIndex(currentLine);
    const originalLine = getLineText(currentLine);

    const leadingSpaces = originalLine.length - originalLine.trimStart().length;
    const trimmedText = originalLine.trim();

    if (!trimmedText) return;

    const config = styleConfigs[currentStyle];
    const maxWidth = config.width;
    const textWidth = measureTextWidth(trimmedText);
    const spaceWidth = measureTextWidth(' ');

    const newLeadingSpaces = Math.floor(
        (maxWidth - textWidth) / (2 * spaceWidth)
    );

    const newText =
        ' '.repeat(Math.max(0, newLeadingSpaces)) + trimmedText;

    replaceLineText(currentLine, newText);

    // ── cursor adjustment ──────────────────────────────
    if (cursorPos != null) {
        const cursorOffsetInLine = cursorPos - lineStart;

        const adjustedOffset =
            Math.max(
                0,
                cursorOffsetInLine - leadingSpaces + newLeadingSpaces
            );

        restoreCursorPosition(lineStart + adjustedOffset);
    }
}

// Align line right
function alignLineRight() {
    const cursorPos = saveCursorPosition();
    const currentLine = getCurrentLine();
    if (currentLine === null) return;

    const lineStart = getLineStartIndex(currentLine);
    const originalLine = getLineText(currentLine);

    const leadingSpaces =
        originalLine.length - originalLine.trimStart().length;

    const trimmedText = originalLine.trim();
    if (!trimmedText) return;

    const config = styleConfigs[currentStyle];
    const maxWidth = config.width;
    const textWidth = measureTextWidth(trimmedText);
    const spaceWidth = measureTextWidth(' ');

    const newLeadingSpaces = Math.max(
        0,
        Math.floor((maxWidth - textWidth) / spaceWidth) - 1
    );

    const newText =
        ' '.repeat(newLeadingSpaces) + trimmedText;

    replaceLineText(currentLine, newText);

    // ── cursor adjustment ──────────────────────────────
    if (cursorPos != null) {
        const cursorOffsetInLine = cursorPos - lineStart;

        const adjustedOffset =
            Math.max(
                0,
                cursorOffsetInLine - leadingSpaces + newLeadingSpaces
            );

        restoreCursorPosition(lineStart + adjustedOffset);
    }
}


// Align text middle (vertically center all text)
function alignTextMiddle() {
    const cursorPos = saveCursorPosition();
    const currentLine = getCurrentLine();

    const lines = textarea.value.split('\n');
    const totalLines = lines.filter(line => line.trim()).length;
    if (totalLines === 0) return;

    const config = styleConfigs[currentStyle];
    const lineHeight = 20;
    const maxLines = Math.floor(config.height / lineHeight);

    const emptyLinesNeeded = Math.floor((maxLines - totalLines) / 2);
    if (emptyLinesNeeded <= 0) return;

    const newLines = new Array(emptyLinesNeeded).fill('').concat(lines);
    textarea.value = newLines.join('\n');
    updatePreview();

    // ── cursor adjustment ──────────────────────────────
    if (cursorPos != null && currentLine != null) {
        const newLine = currentLine + emptyLinesNeeded;
        restoreCursorPosition(
            getLineStartIndex(newLine) +
            (cursorPos - getLineStartIndex(currentLine))
        );
    }
}

// Columnify text
function columnify() {
    const cursorPos = saveCursorPosition();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    // Determine which lines to process
    let startLine, endLine;
    if (start !== end) {
        // Range selection active
        const textBeforeStart = textarea.value.substring(0, start);
        const textBeforeEnd = textarea.value.substring(0, end);
        startLine = textBeforeStart.split('\n').length - 1;
        endLine = textBeforeEnd.split('\n').length - 1;
    } else {
        // No selection, use all lines
        startLine = 0;
        endLine = textarea.value.split('\n').length - 1;
    }
    
    const allLines = textarea.value.split('\n');
    const linesToProcess = allLines.slice(startLine, endLine + 1);
    
    // Filter out empty lines
    const nonEmptyLines = linesToProcess.filter(line => line.trim());
    
    if (nonEmptyLines.length < 2) return; // Need at least 2 lines to columnify
    
    const config = styleConfigs[currentStyle];
    const maxWidth = config.width;
    const spaceWidth = measureTextWidth(' ');
    const minSpaces = 4;
    const minGap = minSpaces * spaceWidth;
    
    // Distribute lines into two columns
    const midpoint = Math.ceil(nonEmptyLines.length / 2);
    const column1 = nonEmptyLines.slice(0, midpoint);
    const column2 = nonEmptyLines.slice(midpoint);
    
    const newLines = [];
    
    for (let i = 0; i < column1.length; i++) {
        const col1Text = column1[i].trim();
        const col2Text = column2[i] ? column2[i].trim() : '';
        
        if (!col2Text) {
            // Only column 1 has content
            newLines.push(col1Text);
            continue;
        }
        
        const col1Width = measureTextWidth(col1Text);
        const col2Width = measureTextWidth(col2Text);
        
        // Check if both columns can fit on one line with minimum gap
        if (col1Width + minGap + col2Width <= maxWidth) {
            // Calculate spaces needed between columns
            const availableSpace = maxWidth - col1Width - col2Width;
            const spacesNeeded = Math.floor(availableSpace / spaceWidth);
            const actualSpaces = Math.max(minSpaces, spacesNeeded - 2);
            
            newLines.push(col1Text + ' '.repeat(actualSpaces) + col2Text);
        } else {
            // Columns don't fit, place column2 on its own line aligned right
            newLines.push(col1Text);
            
            // Align column2 to the right
            const col2Spaces = Math.max(
                0,
                Math.floor((maxWidth - col2Width) / spaceWidth) - 2
            );
            newLines.push(' '.repeat(col2Spaces) + col2Text);
        }
    }
    
    // Replace the processed lines
    allLines.splice(startLine, endLine - startLine + 1, ...newLines);
    textarea.value = allLines.join('\n');
    updatePreview();
    
    // Restore cursor position
    if (cursorPos != null) {
        // Simple approach: place cursor at the start of the columnified section
        restoreCursorPosition(getLineStartIndex(startLine));
    }
}

// Event listeners
textarea.addEventListener('keyup', updatePreview);

styleInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        currentStyle = e.target.value;
        createPreviewElement();
        updatePreview();
    });
});

splitLinesBtn.addEventListener('click', splitLines);
alignCenterBtn.addEventListener('click', alignLineCenter);
alignRightBtn.addEventListener('click', alignLineRight);
alignMiddleBtn.addEventListener('click', alignTextMiddle);
columnifyBtn.addEventListener('click', columnify);

// Initialize
updatePreview();