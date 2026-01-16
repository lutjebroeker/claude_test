# CLAUDE.md - AI Assistant Guide

**Last Updated:** 2026-01-16
**Repository:** lutjebroeker/claude_test
**Status:** Initial Repository Setup

## Overview

This document serves as a comprehensive guide for AI assistants working with this codebase. It documents the project structure, development workflows, coding conventions, and best practices to ensure consistent and effective assistance.

---

## Project Status

**Current State:** Empty repository - initial setup phase

This repository is currently in its initial state with no codebase yet. As development progresses, this document should be updated to reflect:
- Project purpose and goals
- Technology stack and frameworks
- Architecture decisions
- Key components and their relationships

---

## Repository Structure

```
claude_test/
├── .git/                 # Git version control
└── CLAUDE.md            # This file (AI assistant guide)
```

**To Be Added:** Update this section as the project structure develops.

---

## Development Workflow

### Branch Strategy

- **Development Branch:** `claude/claude-md-mkgmdgpsg63odyth-erq9q`
- **Main Branch:** (To be determined)

### Git Operations

#### Committing Changes
```bash
# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "type: brief description

Detailed explanation of changes and rationale"

# Push to development branch
git push -u origin claude/claude-md-mkgmdgpsg63odyth-erq9q
```

**Commit Message Conventions:**
- Use conventional commit format: `type: description`
- Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`
- Keep subject line under 72 characters
- Add detailed body for complex changes

#### Network Resilience
- Retry failed pushes/fetches up to 4 times with exponential backoff (2s, 4s, 8s, 16s)
- Always use `-u` flag when pushing to establish upstream tracking

### Pull Request Process

When creating PRs:
1. Review all commits included in the branch
2. Provide comprehensive summary of changes
3. Include test plan with actionable items
4. Link related issues or discussions

---

## Technology Stack

**To Be Determined** - Update when project technologies are selected.

Consider documenting:
- Programming languages and versions
- Frameworks and libraries
- Build tools and package managers
- Testing frameworks
- CI/CD tools
- Deployment platforms

---

## Code Organization

### Directory Structure Guidelines

**To Be Established** - Update as project structure emerges.

Common patterns to consider:
```
src/           # Source code
  ├── components/   # Reusable components
  ├── services/     # Business logic
  ├── utils/        # Utility functions
  └── types/        # Type definitions
tests/         # Test files
docs/          # Documentation
config/        # Configuration files
scripts/       # Build and utility scripts
```

### File Naming Conventions

**To Be Established** - Define naming patterns:
- Use consistent case (kebab-case, camelCase, PascalCase)
- Reflect file purpose in names
- Group related files logically

---

## Coding Conventions

### General Principles

1. **Simplicity First:** Avoid over-engineering; implement only what's needed
2. **Security Awareness:** Prevent common vulnerabilities (XSS, SQL injection, etc.)
3. **No Premature Abstraction:** Don't create utilities for one-time operations
4. **Clean Code:** Write self-documenting code; add comments only for non-obvious logic
5. **Error Handling:** Validate at system boundaries (user input, external APIs)

### Language-Specific Guidelines

**To Be Added** - Document conventions for chosen languages:
- Code formatting and style
- Linting rules
- Type safety requirements
- Documentation standards

---

## Testing Strategy

**To Be Established** - Define testing approach:
- Unit testing requirements
- Integration testing approach
- End-to-end testing strategy
- Test coverage expectations
- Testing tools and frameworks

---

## Dependencies Management

**To Be Established** - Document how to:
- Add new dependencies
- Update existing dependencies
- Handle version conflicts
- Security vulnerability scanning

---

## Build and Deployment

### Local Development

**To Be Documented** - Setup instructions:
```bash
# Installation steps
# Development server setup
# Environment configuration
```

### Build Process

**To Be Documented** - Build commands and processes

### Deployment

**To Be Documented** - Deployment procedures and environments

---

## Common Tasks for AI Assistants

### Before Making Changes

1. **Read Before Modifying:** Always read files before proposing changes
2. **Understand Context:** Review related files to understand dependencies
3. **Check Conventions:** Follow established patterns in the codebase
4. **Plan Complex Tasks:** Use TodoWrite tool for multi-step operations

### When Adding Features

1. Research existing implementations
2. Design the solution considering existing architecture
3. Implement core functionality
4. Add tests if testing framework exists
5. Update documentation
6. Commit and push changes

### When Fixing Bugs

1. Reproduce the issue if possible
2. Identify root cause
3. Implement minimal fix
4. Verify fix doesn't introduce new issues
5. Update tests if applicable
6. Document the fix in commit message

### When Refactoring

1. Only refactor when explicitly requested
2. Maintain existing functionality
3. Keep changes focused and minimal
4. Ensure tests pass after refactoring
5. Don't mix refactoring with feature changes

---

## Security Considerations

### General Guidelines

- Validate all external input
- Sanitize data before output (prevent XSS)
- Use parameterized queries (prevent SQL injection)
- Implement proper authentication and authorization
- Handle sensitive data securely
- Follow OWASP Top 10 guidelines

### Secrets Management

**To Be Established** - Document approach to:
- Environment variables
- API keys and credentials
- Configuration management
- .gitignore patterns

---

## Documentation Standards

### Code Documentation

**To Be Established** - Define requirements for:
- Inline comments
- Function/method documentation
- Class documentation
- API documentation

### External Documentation

- **README.md:** Project overview, setup instructions, usage
- **CLAUDE.md:** This file - guide for AI assistants
- **CONTRIBUTING.md:** (If applicable) Contribution guidelines
- **API Documentation:** (If applicable) API reference

---

## Performance Considerations

**To Be Established** - Document:
- Performance requirements
- Optimization strategies
- Monitoring and profiling tools
- Common performance pitfalls

---

## Troubleshooting

### Common Issues

**To Be Documented** - As issues arise, document:
- Problem description
- Symptoms
- Resolution steps
- Prevention strategies

### Debug Process

**To Be Established** - Debugging workflows and tools

---

## Resources and References

### Internal Documentation

- **README.md:** (To be created) - Project overview
- **Architecture Docs:** (To be created) - System design

### External Resources

**To Be Added** - Links to:
- Framework documentation
- API references
- Tutorial resources
- Related projects

---

## Maintenance Notes

### Updating This Document

**When to Update:**
- Project structure changes
- New technologies adopted
- Coding conventions established
- Development workflow changes
- Common issues identified

**How to Update:**
- Keep information current and accurate
- Remove outdated sections
- Add examples for clarity
- Update "Last Updated" date
- Maintain clear organization

### Review Schedule

Recommend reviewing this document:
- After major architectural changes
- When onboarding new technologies
- Quarterly for accuracy
- When patterns emerge from repeated questions

---

## Quick Reference

### Essential Commands

```bash
# Git operations
git status                                          # Check repository status
git add <files>                                     # Stage changes
git commit -m "type: description"                   # Commit changes
git push -u origin claude/claude-md-mkgmdgpsg63odyth-erq9q  # Push to dev branch

# Project commands (to be added)
# npm install / pip install / cargo build / etc.
# npm test / pytest / cargo test / etc.
# npm run build / make / cargo build --release / etc.
```

### File Paths to Know

- **This file:** `/home/user/claude_test/CLAUDE.md`
- **Root directory:** `/home/user/claude_test`

---

## Notes for AI Assistants

### Working with This Repository

1. **Always Check Current Branch:** Ensure working on correct development branch
2. **Commit Regularly:** Make atomic commits with clear messages
3. **Push When Complete:** Push finished work to the designated branch
4. **Update Documentation:** Keep CLAUDE.md current as project evolves
5. **Ask When Uncertain:** Use AskUserQuestion for clarification

### Communication Style

- Be concise and technical
- Focus on facts and problem-solving
- Avoid unnecessary praise or validation
- Use markdown formatting for clarity
- Reference code with `file_path:line_number` format

### Tool Usage Priorities

1. Use specialized tools (Read, Edit, Write) over bash commands
2. Use Task tool for complex exploratory work
3. Make parallel tool calls when operations are independent
4. Use TodoWrite for multi-step tasks

---

## Contributing to This Document

This document should evolve with the project. As the AI assistant or developer:

- **Add sections** as new technologies are adopted
- **Update conventions** when patterns are established
- **Document gotchas** when issues are discovered
- **Provide examples** to illustrate complex concepts
- **Keep it practical** - focus on actionable information

---

*This guide is a living document. Update it frequently to reflect the current state of the project.*
