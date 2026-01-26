# Contributing to SGE ASI

Thank you for your interest in contributing to SGE ASI! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on what is best for the project
- Show empathy towards other community members

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
```bash
git clone https://github.com/your-username/SGE_ASI.git
cd SGE_ASI
```

3. **Create a branch**
```bash
git checkout -b feature/your-feature-name
```

## 💻 Development Workflow

### Setting Up Development Environment

1. **Install dependencies**
```bash
# Backend
cd API
npm install

# Frontend
cd FRONT
npm install
```

2. **Configure environment**
```bash
cp API/.env.example API/.env
cp FRONT/.env.example FRONT/.env
```

3. **Start development servers**
```bash
# Backend (in one terminal)
cd API
npm run dev

# Frontend (in another terminal)
cd FRONT
npm run dev
```

### Code Style

#### JavaScript/React

- Use ES6+ features
- Follow Airbnb style guide
- Use meaningful variable names
- Write self-documenting code
- Add comments for complex logic

#### File Naming

- Components: PascalCase (e.g., `UserProfile.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

### Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat(auth): add password reset functionality

fix(cost-centers): correct category creation logic

docs(api): update endpoint documentation
```

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd API
npm test

# Frontend tests
cd FRONT
npm test

# Coverage
npm run test:coverage
```

### Writing Tests

- Write tests for all new features
- Maintain at least 80% code coverage
- Test edge cases and error scenarios
- Use descriptive test names

## 📝 Pull Request Process

1. **Update documentation**
   - Update README if needed
   - Document new APIs in Swagger
   - Add inline code comments

2. **Run tests and linters**
```bash
npm run lint
npm test
```

3. **Create pull request**
   - Use a clear title
   - Describe changes in detail
   - Reference related issues
   - Include screenshots for UI changes

4. **Review process**
   - Address reviewer feedback
   - Keep PR focused and small
   - Rebase on main if needed

## 🏗️ Project Structure

```
SGE_ASI/
├── API/              # Backend
│   ├── src/
│   │   ├── config/  # Configuration
│   │   ├── modules/ # Feature modules
│   │   ├── middleware/
│   │   └── utils/
│   └── tests/
├── FRONT/           # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── modules/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
└── docs/            # Documentation
```

## 📦 Adding Dependencies

Before adding a new dependency:

1. Check if similar functionality exists
2. Verify package is actively maintained
3. Check bundle size impact
4. Ensure license compatibility
5. Document why it's needed in PR

## 🐛 Bug Reports

### Before Submitting

- Check existing issues
- Update to latest version
- Test in clean environment

### What to Include

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots/logs if applicable

## 💡 Feature Requests

### What to Include

- Problem description
- Proposed solution
- Alternative solutions
- Impact assessment
- Mockups/diagrams if applicable

## 📚 Documentation

- Update README for major changes
- Document new APIs in Swagger
- Add inline comments for complex code
- Update module READMEs
- Include examples in documentation

## ✅ Checklist Before Submitting PR

- [ ] Code follows project style
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Commits follow conventions
- [ ] Branch is up to date with main
- [ ] No merge conflicts
- [ ] All tests passing
- [ ] Linter passing
- [ ] No console errors/warnings

## 🎯 Areas for Contribution

- New features from roadmap
- Bug fixes
- Performance improvements
- Documentation improvements
- Test coverage
- UI/UX enhancements
- Accessibility improvements
- Internationalization

## 📞 Getting Help

- Check documentation
- Search existing issues
- Ask in discussions
- Contact maintainers

## 🙏 Thank You

Your contributions make SGE ASI better for everyone!
