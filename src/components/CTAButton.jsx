import { Phone, Mail, ArrowRight, Loader2 } from 'lucide-react';

/**
 * CTAButton Component
 * Flexible Call-to-Action Button mit verschiedenen Varianten
 */
function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  className = '',
  ariaLabel,
  external = false,
}) {
  // Icon Mapping
  const iconMap = {
    phone: Phone,
    email: Mail,
    arrow: ArrowRight,
    loader: Loader2,
  };

  const Icon = iconMap[icon] || null;

  // Size Classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Variant Classes
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary',
    accent: 'bg-accent text-primary hover:bg-accent-600 focus:ring-accent font-semibold',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-primary focus:ring-white',
    ghost: 'text-primary hover:bg-primary-50 focus:ring-primary',
    ghostWhite: 'text-white hover:bg-white/10 focus:ring-white',
  };

  // Base Classes
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    rounded-lg font-medium
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-12 min-w-12
  `;

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `.trim();

  // Content
  const content = (
    <>
      {loading && <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5" aria-hidden="true" />}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5" aria-hidden="true" />}
    </>
  );

  // Render as Link
  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...linkProps}
      >
        {content}
      </a>
    );
  }

  // Render as Button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}

/**
 * PhoneCTA - Spezieller Telefon-Button
 */
export function PhoneCTA({ phone, size = 'lg', className = '' }) {
  const formattedPhone = phone || '0157 56276633';
  const phoneRaw = formattedPhone.replace(/\s/g, '');

  return (
    <CTAButton
      href={`tel:${phoneRaw}`}
      variant="accent"
      size={size}
      icon="phone"
      className={`shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${className}`}
      ariaLabel={`Jetzt anrufen: ${formattedPhone}`}
    >
      <span className="flex flex-col items-start">
        {size === 'lg' || size === 'xl' ? (
          <>
            <span className="text-xs opacity-80">Jetzt anrufen</span>
            <span className="font-bold">{formattedPhone}</span>
          </>
        ) : (
          formattedPhone
        )}
      </span>
    </CTAButton>
  );
}

export default CTAButton;
