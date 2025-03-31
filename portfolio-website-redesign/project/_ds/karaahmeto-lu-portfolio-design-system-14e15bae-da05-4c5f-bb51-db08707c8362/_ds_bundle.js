/* @ds-bundle: {"format":4,"namespace":"KaraahmetoLuPortfolioDesignSystem_14e15b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProjectCard","sourcePath":"components/core/ProjectCard.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavPill","sourcePath":"components/navigation/NavPill.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6b3bc89ed939","components/core/Badge.jsx":"887d6fd856d7","components/core/Button.jsx":"c7828fe2eb37","components/core/IconButton.jsx":"86f7ec66e1e0","components/core/ProjectCard.jsx":"a6de1fd70682","components/core/SectionTitle.jsx":"a9a2d4094868","components/feedback/Toast.jsx":"4c319c37bde6","components/forms/Input.jsx":"432648f5b8ba","components/navigation/NavPill.jsx":"cbb47820870b","ui_kits/portfolio/ContactSection.jsx":"55a03c1969c8","ui_kits/portfolio/Footer.jsx":"ba4c6de79b78","ui_kits/portfolio/Hero.jsx":"67b1e0414a78","ui_kits/portfolio/ProjectDetail.jsx":"236dbd7ad337","ui_kits/portfolio/ProjectsSection.jsx":"b5ebd079edf0","ui_kits/portfolio/SkillsSection.jsx":"6afdbaef42bc","ui_kits/portfolio/data.js":"4fee5bb49453"},"inlinedExternals":[],"unexposedExports":[{"name":"profileImg","sourcePath":"ui_kits/portfolio/data.js"},{"name":"projects","sourcePath":"ui_kits/portfolio/data.js"},{"name":"skills","sourcePath":"ui_kits/portfolio/data.js"},{"name":"vitae","sourcePath":"ui_kits/portfolio/data.js"}]} */

(() => {

const __ds_ns = (window.KaraahmetoLuPortfolioDesignSystem_14e15b = window.KaraahmetoLuPortfolioDesignSystem_14e15b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  alt = 'Profile photo',
  size = 220,
  ring = true
}) {
  return React.createElement('div', {
    style: {
      width: size,
      aspectRatio: '3/4',
      borderRadius: '50%',
      position: 'relative',
      overflow: 'hidden',
      padding: ring ? 3 : 0,
      background: ring ? 'var(--gradient-legacy-ring)' : 'transparent'
    }
  }, React.createElement('img', {
    src,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
      display: 'block',
      background: 'var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)',
      background: 'transparent'
    },
    accent: {
      border: '1px solid var(--signal-700)',
      color: 'var(--accent-primary)',
      background: 'var(--signal-900)'
    },
    solid: {
      border: 'none',
      color: 'var(--accent-on-accent)',
      background: 'var(--accent-primary)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-label)',
      letterSpacing: 'var(--ls-mono-label)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 10px',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  disabled = false,
  onClick,
  type = 'button'
}) {
  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '14px 28px' : '11px 22px';
  const fontSize = size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14px';
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize,
    fontWeight: 400,
    borderRadius: 'var(--radius-pill)',
    padding: pad,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--surface-pill)',
      color: 'var(--text-on-pill)'
    },
    accent: {
      background: 'var(--accent-primary)',
      color: 'var(--accent-on-accent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    }
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style: {
      ...base,
      ...variants[variant]
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  onClick,
  label,
  size = 40
}) {
  return React.createElement('button', {
    onClick,
    'aria-label': label,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      transition: 'color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent-primary)';
      e.currentTarget.style.background = 'var(--surface-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'transparent';
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  description,
  image,
  headline,
  onClick
}) {
  return React.createElement('div', {
    onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxWidth: 345,
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: 'var(--shadow-card)',
      transition: 'transform var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, React.createElement('div', {
    style: {
      padding: '16px 18px 4px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--accent-primary)',
      marginTop: '2px'
    }
  }, description)), React.createElement('img', {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: 180,
      objectFit: 'cover',
      display: 'block',
      background: 'var(--surface-raised)'
    }
  }), React.createElement('div', {
    style: {
      padding: '14px 18px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, headline));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  style
}) {
  return React.createElement('h2', {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-h1)',
      fontSize: 'var(--text-h1)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-6) 0',
      letterSpacing: 'var(--ls-h1)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  open,
  tone = 'success'
}) {
  if (!open) return null;
  const tones = {
    success: {
      border: 'var(--success-500)',
      color: 'var(--success-500)'
    },
    error: {
      border: 'var(--danger-500)',
      color: 'var(--danger-500)'
    }
  };
  return React.createElement('div', {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--surface-raised)',
      border: `1px solid ${tones[tone].border}`,
      color: 'var(--text-primary)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 20px',
      boxShadow: 'var(--shadow-raised)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, React.createElement('span', {
    style: {
      color: tones[tone].color
    }
  }, '●'), message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  multiline = false,
  rows = 4,
  error,
  value,
  onChange,
  name
}) {
  const Tag = multiline ? 'textarea' : 'input';
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement(Tag, {
    type: multiline ? undefined : type,
    name,
    rows: multiline ? rows : undefined,
    placeholder,
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: `1px solid ${error ? 'var(--danger-500)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      resize: multiline ? 'vertical' : undefined
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--danger-500)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavPill.jsx
try { (() => {
function NavPill({
  items,
  active,
  onSelect
}) {
  return React.createElement('nav', {
    style: {
      display: 'inline-flex',
      gap: '4px',
      background: 'var(--surface-pill)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 10px',
      boxShadow: 'var(--shadow-card)'
    }
  }, items.map(it => React.createElement('button', {
    key: it.id,
    onClick: () => onSelect && onSelect(it.id),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 18px',
      background: active === it.id ? 'var(--paper-white)' : 'transparent',
      color: 'var(--text-on-pill)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, it.label)));
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ContactSection.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function ContactSection({
  refCb
}) {
  const {
    SectionTitle,
    Input,
    Button,
    Toast
  } = DS;
  const [form, setForm] = React.useState({
    subject: '',
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  function set(k, v) {
    setForm(f => ({
      ...f,
      [k]: v
    }));
  }
  function submit(e) {
    e.preventDefault();
    const errs = {};
    if (form.subject.length < 3) errs.subject = 'Subject must be at least 3 characters';
    if (form.name.length < 1) errs.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (form.message.length < 10) errs.message = 'Message must be at least 10 characters';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({
        subject: '',
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSent(false), 3000);
    }, 700);
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: refCb,
    style: {
      padding: '80px 6% 100px',
      background: 'var(--surface-canvas)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Contact Me"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Subject",
    placeholder: "Subject",
    value: form.subject,
    onChange: e => set('subject', e.target.value),
    error: errors.subject
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Name",
    value: form.name,
    onChange: e => set('name', e.target.value),
    error: errors.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "Email",
    value: form.email,
    onChange: e => set('email', e.target.value),
    error: errors.email
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 6,
    placeholder: "Hello, please describe your message here...",
    value: form.message,
    onChange: e => set('message', e.target.value),
    error: errors.message
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    disabled: sending
  }, sending ? 'Sending…' : 'Send Message')))), /*#__PURE__*/React.createElement(Toast, {
    open: sent,
    message: "Message sent \u2014 thanks for reaching out!"
  }));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function Footer() {
  const {
    IconButton
  } = DS;
  function GH() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.94.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
    }));
  }
  function LI() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9z"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 6%',
      background: 'var(--ink-950)',
      backgroundImage: 'var(--gradient-aurora)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 200,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "\xA9 2026 All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Thanks for visiting! Feel free to connect with me."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "LinkedIn"
  }, /*#__PURE__*/React.createElement(LI, null)), /*#__PURE__*/React.createElement(IconButton, {
    label: "GitHub"
  }, /*#__PURE__*/React.createElement(GH, null))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function Hero({
  refCb
}) {
  const {
    Avatar
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    ref: refCb,
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 6% 60px',
      background: 'var(--surface-canvas)',
      backgroundImage: 'var(--gradient-aurora)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px',
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-display)',
      fontSize: 'var(--text-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-primary)'
    }
  }, "Raif Karaahmeto\u011Flu"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '18px',
      marginTop: 10,
      background: 'var(--gradient-legacy-ring)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      fontWeight: 500
    }
  }, "Software & Control Engineer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-body-light)',
      color: 'var(--ink-100)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      marginTop: 20,
      maxWidth: 520,
      textAlign: 'justify'
    }
  }, "I am a dedicated software and control engineer with a deep commitment to the core pillars of mechatronics: mechanical design, control systems and software development. I enjoy adapting quickly and expanding my knowledge to deliver innovative, high-impact solutions.")), /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/photos/profile-pic.jpeg",
    size: 260
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectDetail.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function ProjectDetail({
  project,
  onClose,
  onCopyLink
}) {
  const {
    IconButton
  } = DS;
  if (!project) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,7,11,0.88)',
      backdropFilter: 'blur(6px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5%'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      maxWidth: 900,
      width: '100%',
      maxHeight: '85vh',
      overflowY: 'auto',
      boxShadow: 'var(--shadow-raised)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: project.image,
    alt: project.title,
    style: {
      width: '100%',
      height: 320,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      cursor: 'pointer',
      marginBottom: 16,
      padding: 0
    }
  }, "\u2190 Return Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'var(--text-h1)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, project.title), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share link",
    onClick: onCopyLink
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 1 0 5 15c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66a2.99 2.99 0 1 0 3.92-2.91Z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--accent-primary)',
      marginTop: 4
    }
  }, project.description), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink-100)',
      fontSize: 15,
      lineHeight: 1.7,
      textAlign: 'justify',
      whiteSpace: 'pre-wrap',
      marginTop: 24
    }
  }, project.content))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectsSection.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function ProjectsSection({
  refCb,
  projects,
  onOpen
}) {
  const {
    SectionTitle,
    ProjectCard
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    ref: refCb,
    style: {
      padding: '80px 6%',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 'var(--space-8)'
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    headline: p.headline,
    onClick: () => onOpen(p)
  })))));
}
window.ProjectsSection = ProjectsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/SkillsSection.jsx
try { (() => {
const DS = window.KaraahmetoLuPortfolioDesignSystem_14e15b;
function SkillsSection({
  refCb,
  skills
}) {
  const {
    SectionTitle
  } = DS;
  const [openId, setOpenId] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    ref: refCb,
    style: {
      padding: '80px 6%',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, null, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '260px',
      columnGap: 'var(--space-4)'
    }
  }, skills.map(s => {
    const open = openId === s.id;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => setOpenId(open ? null : s.id),
      style: {
        breakInside: 'avoid',
        marginBottom: 'var(--space-4)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 18px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 15,
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, s.title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    }, "\u2304")), open && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        marginTop: 10
      }
    }, s.content));
  }))));
}
window.SkillsSection = SkillsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/SkillsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
const profileImg = "../../assets/photos/profile-pic.jpeg";
const vitae = "I am a dedicated software and control engineer with a deep commitment to the core pillars of mechatronics: mechanical design, control systems and software development. I enjoy adapting quickly and expanding my knowledge to deliver innovative, high-impact solutions.";
const projects = [{
  id: 1,
  title: "GCDC",
  description: "Grand Cooperative Driving Challenge",
  image: "../../assets/projects/gcdc-2.png",
  headline: "Semi-autonomous vehicle for the GCDC 2011 competition — mechanical design, simulation, and a platooning control algorithm.",
  content: "The Grand Cooperative Driving Challenge is a European competition showcasing cooperative autonomous driving. Our team developed a Co-operative Adaptive Cruise Control system with vehicle-to-vehicle communication, automatically following lead vehicles, obeying traffic lights and speed limits over a 6km track at 100km/h. Team Mekar finished 7th of 11 overall, and 5th in speed-profile tracking."
}, {
  id: 2,
  title: "UCOK",
  description: "Remote controlled weapon station",
  image: "../../assets/projects/ucok-1.png",
  headline: "Lightweight RCWS with a new sight system, optimized balance, and improved functionality.",
  content: "Developing a new lightweight remote weapon station required an independent front-edge sight system, increased elevation range, doubled ammo capacity and compatibility across three weapon types. A new compact sight system reduced size and weight while improving elevation range and balance, embedding motor control units securely within the forks."
}, {
  id: 3,
  title: "ICE Model",
  description: "Internal combustion engine model",
  image: "../../assets/projects/ice-1.jpg",
  headline: "Crank-angle-based diesel engine model for real-time control algorithm development.",
  content: "A zero-dimensional engine model was built for accuracy and real-time speed, covering slider-crank kinematics, fluid dynamics for cylinder/turbo/intercooler flows, and in-cylinder thermodynamics. Wiebe and Constien combustion models captured pressure and temperature states with high precision for multi-injection strategies."
}, {
  id: 4,
  title: "Automated Tractor",
  description: "Automated steering system",
  image: "../../assets/projects/automated-tractor-1.png",
  headline: "GPS-guided automatic steering system for agricultural vehicles.",
  content: "GPS localization converted lat/long into easting/northing positions; a trajectory-construction algorithm built routes from waypoints; a path-following algorithm regulated position and heading via the steering valves. The prototype was validated on asphalt roads with accurate tracking."
}, {
  id: 5,
  title: "GEM Model",
  description: "Greenhouse Gas Emissions Model",
  image: "../../assets/projects/gem-2.png",
  headline: "Integrating the EPA's GEM vehicle model with Puma/IGEM2 for real-time test-bench simulation.",
  content: "The EPA's GEM model, originally offline-only, was refactored for real-time use on a power-pack test bench: parameterization was wrapped into the workflow, unnecessary components were stripped for real hardware, and bumpless-transfer logic enabled parameter updates mid-cycle."
}, {
  id: 6,
  title: "AVL ISAC",
  description: "Real-time vehicle simulation on testbed",
  image: "../../assets/projects/isac-1.png",
  headline: "Modernizing the ISAC vehicle simulation library for contemporary architectures.",
  content: "Advanced powertrain components, vehicle kinematics/dynamics models, and tire-road interaction models were developed to bring the ISAC simulation library up to modern vehicle-architecture standards for future development and testing."
}, {
  id: 7,
  title: "AVL Route Studio",
  description: "Road digitalization for virtual testing",
  image: "../../assets/projects/route-studio-1.png",
  headline: "Modern vehicle subsystem models, battery identification, and RDE route generation for Route Studio.",
  content: "Legacy vehicle models were rebuilt in Simulink, modern EV components (motors, battery models, regen strategies) were added and migrated back to Python. A real-driving-emission cycle generator and a battery-model factory algorithm were integrated, plus an automated HIL project-creation module using dSpace APIs."
}];
const skills = [{
  id: 1,
  title: "MATLAB / Simulink",
  content: "Used since 2009 for simulation and control of automotive systems, focused on developing and testing advanced control technologies."
}, {
  id: 2,
  title: "C",
  content: "Advanced simulation models integrated with MATLAB/Simulink, and real-time control applications in automotive systems."
}, {
  id: 3,
  title: "C++",
  content: "Applied through a FlexLM license solution built after in-depth coursework."
}, {
  id: 4,
  title: "Python",
  content: "Vehicle dynamics libraries, automated HIL project creation, and AI/statistical algorithm work, using SOLID design principles."
}, {
  id: 5,
  title: "JavaScript",
  content: "UI components for AVL Route Studio, focused on the algorithms owned within the project."
}, {
  id: 6,
  title: "React",
  content: "Web-based UI development with React and React Router for dynamic, responsive interfaces."
}, {
  id: 7,
  title: "CATIA",
  content: "Mechanical system design for remote-controlled weapon systems (Otokar UCOK)."
}, {
  id: 8,
  title: "Enterprise Architect",
  content: "Systems engineering for construction-machinery development."
}];
Object.assign(__ds_scope, { profileImg, vitae, projects, skills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavPill = __ds_scope.NavPill;

})();
