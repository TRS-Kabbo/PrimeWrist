/* @ds-bundle: {"format":4,"namespace":"PrimeWristBDDesignSystem_fd66a4","components":[{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/commerce/PriceTag.jsx":"ccb8b6be3019","components/commerce/ProductCard.jsx":"40d4368b80c7","components/feedback/Badge.jsx":"7e541f8ba3af","components/feedback/Tag.jsx":"0ae673ba25e2","components/forms/Button.jsx":"d07e9a559987","components/forms/IconButton.jsx":"0d79cf534cd0","components/forms/Input.jsx":"7fa796c2dd99","components/forms/Select.jsx":"272a66b1e02a","components/icons/Icon.jsx":"0ab3e61b50dd","components/layout/Divider.jsx":"b69f0902f2ef","components/layout/SectionHeading.jsx":"54b481a9107a","components/layout/Tabs.jsx":"5021b91de446","components/navigation/Footer.jsx":"5d9dff3eaea9","components/navigation/NavBar.jsx":"a0c601ac663c","ui_kits/storefront/Collection.jsx":"4f67f205a192","ui_kits/storefront/Contact.jsx":"5ce30142a9d2","ui_kits/storefront/Home.jsx":"540a32d7c943","ui_kits/storefront/ProductDetail.jsx":"be5502b0c09a","ui_kits/storefront/data.js":"72179099a418"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrimeWristBDDesignSystem_fd66a4 = window.PrimeWristBDDesignSystem_fd66a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTag.jsx
try { (() => {
function fmt(n) {
  return new Intl.NumberFormat('en-US').format(n);
}

/** PriceTag — formatted price with currency, and an optional struck-through original price. */
function PriceTag({
  price,
  originalPrice,
  currency = 'BDT',
  tone = 'on-dark',
  size = 'md',
  style
}) {
  const isDark = tone === 'on-dark';
  const color = isDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const muted = isDark ? 'var(--text-on-dark-faint)' : 'var(--text-on-light-faint)';
  const fontSize = size === 'lg' ? 'var(--text-display-sm)' : size === 'sm' ? 'var(--text-body-md)' : 'var(--text-body-xl)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '10px',
      fontFamily: 'var(--font-serif)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize,
      color,
      fontWeight: 500
    }
  }, currency, " ", fmt(price)), originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: muted,
      textDecoration: 'line-through'
    }
  }, currency, " ", fmt(originalPrice)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const toneStyles = {
  outline: {
    background: 'transparent',
    border: '1px solid var(--border-on-dark-strong)',
    color: 'var(--gold-300)'
  },
  solid: {
    background: 'var(--accent-primary)',
    border: '1px solid var(--accent-primary)',
    color: 'var(--accent-on-primary)'
  },
  subtle: {
    background: 'oklch(from var(--gold-300) l c h / 0.14)',
    border: '1px solid transparent',
    color: 'var(--gold-300)'
  }
};

/** Badge — small tracked-caps label for movement type, condition, or collection status. */
function Badge({
  children,
  tone = 'outline',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...toneStyles[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/** ProductCard — the watch tile used across collection grids: image, brand, name, movement badge, price. */
function ProductCard({
  image,
  brand,
  name,
  price,
  originalPrice,
  movement,
  onClick,
  currency = 'BDT',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: 'var(--surface-elevated)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.045)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  }), movement && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '16px',
      left: '16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid"
  }, movement))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-xl)',
      color: 'var(--text-on-dark)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '4px',
      textDecorationColor: 'var(--gold-300)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    originalPrice: originalPrice,
    currency: currency,
    size: "sm"
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** Tag — clickable filter chip (toggle state), used in shop sidebars/toolbars. */
function Tag({
  children,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: `1px solid ${active ? 'var(--accent-primary)' : 'var(--border-on-dark)'}`,
      background: active ? 'var(--accent-primary)' : hover ? 'oklch(from var(--ivory-50) l c h / 0.06)' : 'transparent',
      color: active ? 'var(--accent-on-primary)' : 'var(--text-on-dark)',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase',
  fontSize: 'var(--text-label-md)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '10px 20px',
    fontSize: '0.75rem'
  },
  md: {
    padding: '14px 30px',
    fontSize: 'var(--text-label-md)'
  },
  lg: {
    padding: '18px 40px',
    fontSize: '0.875rem'
  }
};
const variants = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--accent-on-primary)',
    borderColor: 'var(--accent-primary)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--border-on-dark-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    borderColor: 'transparent',
    padding: '0'
  },
  'on-light': {
    background: 'var(--surface-base)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--surface-base)'
  }
};
const hoverStyles = {
  primary: {
    background: 'var(--accent-primary-hover)',
    borderColor: 'var(--accent-primary-hover)'
  },
  secondary: {
    background: 'oklch(from var(--ivory-50) l c h / 0.08)',
    borderColor: 'var(--gold-300)',
    color: 'var(--gold-300)'
  },
  ghost: {
    color: 'var(--gold-300)'
  },
  'on-light': {
    background: 'var(--green-800)',
    borderColor: 'var(--green-800)'
  }
};

/** Button — primary CTA, secondary outline, ghost text-link, and an on-light variant for use on ivory surfaces. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = variant === 'ghost' ? {} : sizes[size] || sizes.md;
  const h = !disabled && hover ? hoverStyles[variant] || {} : {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...s,
      ...v,
      ...h,
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Input — minimal underline text field matching the brand's restrained, hairline aesthetic. */
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  tone = 'on-dark',
  style
}) {
  const [focused, setFocused] = React.useState(false);
  const isDark = tone === 'on-dark';
  const lineColor = focused ? 'var(--accent-primary)' : isDark ? 'var(--border-on-dark-strong)' : 'var(--border-on-light-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      background: 'transparent',
      border: 'none',
      borderBottom: `1px solid ${lineColor}`,
      padding: '10px 2px',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-lg)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/**
 * Thin wrapper around the Lucide icon set (loaded from CDN by the host page).
 * Renders <i data-lucide="..."> and asks Lucide to replace it with inline SVG on mount/update.
 */
function Icon({
  name = 'circle',
  size = 20,
  strokeWidth = 1.5,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
/** IconButton — a bare icon-only control for chrome actions (search, cart, menu, close). */
function IconButton({
  icon = 'search',
  label,
  size = 20,
  tone = 'on-dark',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === 'on-dark' ? hover ? 'var(--gold-300)' : 'var(--text-on-dark)' : hover ? 'var(--green-900)' : 'var(--text-on-light)';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label || icon,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'transparent',
      border: 'none',
      padding: '6px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      transition: 'color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select — minimal underline dropdown matching Input, with a small chevron. */
function Select({
  label,
  value,
  onChange,
  options = [],
  tone = 'on-dark',
  style
}) {
  const isDark = tone === 'on-dark';
  const lineColor = isDark ? 'var(--border-on-dark-strong)' : 'var(--border-on-light-strong)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderBottom: `1px solid ${lineColor}`
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      padding: '10px 28px 10px 2px',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-lg)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: '#111'
    }
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/** Divider — thin hairline rule, optionally with a centered ornamental diamond mark. */
function Divider({
  ornament = false,
  tone = 'on-dark',
  style
}) {
  const color = tone === 'on-dark' ? 'var(--border-on-dark)' : 'var(--border-on-light)';
  if (!ornament) {
    return /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 'none',
        borderTop: `1px solid ${color}`,
        margin: 0,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      background: 'var(--gold-500)',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: color
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
/** SectionHeading — small tracked-caps eyebrow above a large serif headline; the brand's core section-opener pattern. */
function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  tone = 'on-dark',
  style
}) {
  const isDark = tone === 'on-dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'var(--text-label-lg)',
      letterSpacing: 'var(--tracking-tagline)',
      textTransform: 'uppercase',
      color: 'var(--gold-500)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-md)',
      letterSpacing: '0.02em',
      fontWeight: 500,
      lineHeight: 'var(--leading-display)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-on-light)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
/** Tabs — underline tab switcher, used on product detail pages (Description / Specification / Care). */
function Tabs({
  tabs = [],
  active,
  onChange,
  tone = 'on-dark'
}) {
  const isDark = tone === 'on-dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: `1px solid ${isDark ? 'var(--border-on-dark)' : 'var(--border-on-light)'}`
    }
  }, tabs.map(t => {
    const isActive = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 14px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-label-md)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: isActive ? isDark ? 'var(--gold-500)' : 'var(--green-900)' : isDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)',
        borderBottom: isActive ? '2px solid var(--gold-500)' : '2px solid transparent',
        marginBottom: '-1px',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Footer — dark, four-column site footer with wordmark, nav groups, and legal line. */
function Footer({
  logoText = 'Prime Wrist BD',
  tagline = 'A Journey Through Time, Perfected',
  columns = []
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-base-deep)',
      color: 'var(--text-on-dark)',
      padding: 'var(--space-9) var(--container-pad) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-7)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--gold-500)',
      textTransform: 'uppercase'
    }
  }, logoText), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-tagline)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, tagline)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline)',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-8) auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-sm)',
      color: 'var(--text-on-dark-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " ", logoText, ". All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Dhaka, Bangladesh")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** NavBar — fixed-height top navigation: wordmark centered, links + icons flanking. */
function NavBar({
  logoText = 'Prime Wrist BD',
  links = ['Collection', 'Heritage', 'Journal', 'Contact'],
  onNavigate,
  cartCount = 0
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px var(--container-pad)',
      background: 'var(--surface-base)',
      borderBottom: 'var(--border-hairline)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    onClick: () => setOpen(!open),
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, links.slice(0, 2).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate && onNavigate(l),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate && onNavigate('Home'),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.375rem',
      letterSpacing: 'var(--tracking-wordmark)',
      color: 'var(--gold-500)',
      cursor: 'pointer',
      textTransform: 'uppercase'
    }
  }, logoText), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, links.slice(2).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate && onNavigate(l),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "shopping-bag"
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-2px',
      right: '-2px',
      background: 'var(--accent-primary)',
      color: 'var(--accent-on-primary)',
      fontSize: '10px',
      fontFamily: 'var(--font-sans)',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Collection.jsx
try { (() => {
function Collection({
  products,
  onSelectProduct
}) {
  const {
    SectionHeading,
    Divider,
    Tag,
    ProductCard
  } = window.PrimeWristBDDesignSystem_fd66a4;
  const [filter, setFilter] = React.useState('All');
  const movements = ['All', 'Automatic', 'Mechanical', 'Quartz'];
  const shown = filter === 'All' ? products : products.filter(p => p.movement === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Shop",
    title: "The Collection",
    align: "left"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, movements.map(m => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    active: filter === m,
    onClick: () => setFilter(m)
  }, m))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.image,
    brand: p.brand,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    movement: p.movement,
    onClick: () => onSelectProduct(p)
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--text-on-dark-muted)',
      padding: 'var(--space-8) 0'
    }
  }, "No pieces currently match this filter."));
}
Object.assign(window, {
  Collection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Collection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Contact.jsx
try { (() => {
function Contact() {
  const {
    SectionHeading,
    Divider,
    Input,
    Select,
    Button
  } = window.PrimeWristBDDesignSystem_fd66a4;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Visit Or Enquire",
    title: "Speak With The House",
    align: "left"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: '420px'
    }
  }, "Book a private viewing, ask about authentication, or enquire about a specific reference. Our team replies within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)',
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, "Showroom \u2014 Gulshan Avenue, Dhaka"), /*#__PURE__*/React.createElement("div", null, "Open Sat\u2013Thu, 11:00\u201320:00"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    placeholder: "you@example.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Enquiry Type",
    options: ['Product Enquiry', 'Book a Viewing', 'Authentication', 'Servicing']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "Reference name or question"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: 'fit-content'
    }
  }, sent ? 'Message Sent' : 'Send Enquiry')));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function Home({
  products,
  onSelectProduct,
  onNavigate
}) {
  const {
    SectionHeading,
    Divider,
    ProductCard,
    Button
  } = window.PrimeWristBDDesignSystem_fd66a4;
  const featured = products.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '640px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/hero-collection.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(2,22,15,.55), rgba(2,22,15,.75))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      color: 'var(--text-on-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'var(--text-label-lg)',
      letterSpacing: 'var(--tracking-tagline)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "A Journey Through Time, Perfected"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wordmark)'
    }
  }, "Prime Wrist BD"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('collection')
  }, "Explore the Collection"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-10) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Curated This Season",
    title: "Timepieces Worth Inheriting"
  }), /*#__PURE__*/React.createElement(Divider, {
    ornament: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    image: p.image,
    brand: p.brand,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    movement: p.movement,
    onClick: () => onSelectProduct(p)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)',
      padding: 'var(--space-10) var(--container-pad)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      maxWidth: '640px',
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--text-body-xl)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light)'
    }
  }, "\"Every mechanism we place on a wrist has been examined, wound, and judged worthy of a lifetime.\"", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      fontStyle: 'normal',
      fontSize: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-light-muted)'
    }
  }, "\u2014 Prime Wrist BD, Dhaka"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetail.jsx
try { (() => {
function ProductDetail({
  product,
  onEnquire
}) {
  const {
    Badge,
    PriceTag,
    Tabs,
    Button,
    Divider
  } = window.PrimeWristBDDesignSystem_fd66a4;
  const [tab, setTab] = React.useState('Description');
  const [sent, setSent] = React.useState(false);
  const panels = {
    Description: product.desc,
    Specification: `Movement: ${product.movement}. Case: stainless steel. Water resistance: 100m. Reference photographed from current inventory.`,
    Care: 'Serviced and inspected prior to sale. Recommended movement service interval: 4\u20135 years. Avoid magnetic fields and extreme temperature.'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-10) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: 'var(--surface-elevated)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label-md)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, product.brand), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-md)',
      color: 'var(--text-on-dark)',
      lineHeight: 'var(--leading-display)'
    }
  }, product.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    style: {
      width: 'fit-content'
    }
  }, product.movement), /*#__PURE__*/React.createElement(PriceTag, {
    price: product.price,
    originalPrice: product.originalPrice,
    size: "lg"
  }), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-2) 0'
    }
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Description', 'Specification', 'Care'],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: '480px'
    }
  }, panels[tab]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setSent(true);
      onEnquire && onEnquire(product);
    }
  }, sent ? 'Enquiry Sent' : 'Enquire About This Piece'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Book a Viewing"))));
}
Object.assign(window, {
  ProductDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
window.STOREFRONT_PRODUCTS = [{
  id: 'p1',
  brand: 'Patek Philippe',
  name: 'Nautilus Automatic',
  movement: 'Automatic',
  price: 385000,
  image: '../../assets/imagery/product-patek-green.jpg',
  desc: 'A steel-cased Nautilus with a horizontally embossed green dial and the house\u2019s signature porthole case.'
}, {
  id: 'p2',
  brand: 'Patek Philippe',
  name: 'Grand Complication Chronograph',
  movement: 'Mechanical',
  price: 610000,
  originalPrice: 665000,
  image: '../../assets/imagery/product-patek-chrono.jpg',
  desc: 'A twin-register chronograph in a two-tone case, finished with a hand-guilloch\u00e9 dial.'
}, {
  id: 'p3',
  brand: 'Patek Philippe',
  name: 'Perpetual Calendar Two-Tone',
  movement: 'Automatic',
  price: 540000,
  image: '../../assets/imagery/product-patek-twotone.jpg',
  desc: 'Steel and gold perpetual calendar with moonphase — a dress watch built for daily wear.'
}, {
  id: 'p4',
  brand: 'Patek Philippe',
  name: 'Complication Sector Dial',
  movement: 'Mechanical',
  price: 472000,
  image: '../../assets/imagery/product-patek-complication.jpg',
  desc: 'A sector-dial complication piece with railway minute track and blued steel hands.'
}, {
  id: 'p5',
  brand: 'Audemars Piguet',
  name: 'Royal Oak Skeleton',
  movement: 'Mechanical',
  price: 495000,
  image: '../../assets/imagery/product-ap-skeleton.jpg',
  desc: 'Openworked movement in the octagonal Royal Oak case, visible bridges finished by hand.'
}, {
  id: 'p6',
  brand: 'Tissot',
  name: 'Le Locle Skeleton',
  movement: 'Mechanical',
  price: 62000,
  originalPrice: 78000,
  image: '../../assets/imagery/product-tissot-skeleton.jpg',
  desc: 'An accessible skeleton automatic from the 1853 house — full view of the balance wheel.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
