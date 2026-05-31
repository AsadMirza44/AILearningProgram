#!/bin/bash
# Sample Hook: Pre-Save File Validation
#
# This is a real example of a hook script — a small script that runs
# automatically BEFORE a file is saved or committed.
#
# In an AI coding agent setup, hooks like this fire at lifecycle moments
# such as: before tool use, after a file edit, or before a session ends.
#
# This hook does two things:
#   1. Rejects files that are too large (likely an accidental binary)
#   2. Warns if a Python file does not have any comments
#
# To see this as a git pre-commit hook:
#   Copy it to .git/hooks/pre-commit
#   Run: chmod +x .git/hooks/pre-commit

echo "Running pre-save validation hook..."

# --- Check 1: File size limit ---
MAX_SIZE_KB=500
FILE=$1   # The file being saved is passed as the first argument

if [ -f "$FILE" ]; then
    FILE_SIZE_KB=$(du -k "$FILE" | cut -f1)
    if [ "$FILE_SIZE_KB" -gt "$MAX_SIZE_KB" ]; then
        echo "ERROR: $FILE is ${FILE_SIZE_KB}KB — exceeds the ${MAX_SIZE_KB}KB limit."
        echo "Large binary files should not be committed. Please check before saving."
        exit 1   # Exit code 1 = block the save
    fi
fi

# --- Check 2: Python files should have at least one comment ---
if [[ "$FILE" == *.py ]]; then
    COMMENT_COUNT=$(grep -c "^#" "$FILE" 2>/dev/null || echo 0)
    if [ "$COMMENT_COUNT" -eq 0 ]; then
        echo "WARNING: $FILE has no comments. Consider adding at least one explanation."
        # Note: this is a warning only — exit code 0 means the save still proceeds
    fi
fi

echo "Pre-save validation passed."
exit 0   # Exit code 0 = allow the save to continue

# --- ACTIVITY QUESTIONS ---
# 1. What event triggers this hook? (Before save / after save / on schedule?)
# 2. What happens if exit 1 is used instead of exit 0?
# 3. How is this different from a Rule? (Hint: rules guide behaviour passively;
#    hooks run automatically and can block actions.)
# 4. Write a new check: warn if the file contains the word "password" or "api_key"
