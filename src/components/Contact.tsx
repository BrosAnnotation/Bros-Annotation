import { useState, type FormEvent } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Data Annotation',
  'LLM Evaluation',
  'LLM Post-Training',
  'RLHF',
  'AI Safety',
  'Computer Vision',
  'Multimodal Annotation',
  'Other',
];

interface FormState {
  fullName: string;
  businessEmail: string;
  company: string;
  service: string;
  details: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  company?: string;
  service?: string;
  details?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    businessEmail: '',
    company: '',
    service: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!form.fullName.trim()) {
      e.fullName = 'Please enter your full name.';
    }

    if (!form.businessEmail.trim()) {
      e.businessEmail = 'Please enter your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
      e.businessEmail = 'Please enter a valid email address.';
    }

    if (!form.company.trim()) {
      e.company = 'Please enter your company name.';
    }

    if (!form.service) {
      e.service = 'Please select a service.';
    }

    if (!form.details.trim()) {
      e.details = 'Please describe your project.';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const subject = 'New Project Inquiry - Bros Annotation';

    const body = [
      'New Project Inquiry',
      '',
      `Name: ${form.fullName}`,
      `Business Email: ${form.businessEmail}`,
      `Company: ${form.company}`,
      `Service Required: ${form.service}`,
      '',
      'Project Details:',
      form.details,
    ].join('\n');

    const mailtoLink =
      `mailto:info@brosai.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);

    setForm({
      fullName: '',
      businessEmail: '',
      company: '',
      service: '',
      details: '',
    });

    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="section-pad bg-bg-soft/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-primary-soft border-primary/30 mb-4">
            Contact
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your AI Data Annotation Project
          </h2>

          <p className="text-text-muted">
            Tell us about your AI data annotation, LLM evaluation, or AI training
            project and we'll discuss your requirements, timeline, and next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal">

            {/* Email */}
            <a
              href="mailto:info@brosai.org"
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <Mail className="text-primary-soft" size={22} />
              </div>

              <div>
                <div className="text-xs text-text-dim uppercase tracking-wider mb-1">
                  Email
                </div>

                <div className="text-white font-medium group-hover:text-primary-soft transition-colors">
                  info@brosai.org
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918076542019"
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <Phone className="text-primary-soft" size={22} />
              </div>

              <div>
                <div className="text-xs text-text-dim uppercase tracking-wider mb-1">
                  Phone
                </div>

                <div className="text-white font-medium group-hover:text-primary-soft transition-colors">
                  +91 8076542019
                </div>
              </div>
            </a>

            {/* Quick Actions */}
            <div className="glass-card p-6">
              <div className="text-xs text-text-dim uppercase tracking-wider mb-3">
                Quick Actions
              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="mailto:info@brosai.org"
                  className="btn-primary text-sm"
                >
                  <Mail size={16} />
                  Email Us
                </a>

                <a
                  href="tel:+918076542019"
                  className="btn-secondary text-sm"
                >
                  <Phone size={16} />
                  Call Us
                </a>

              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 space-y-5"
              noValidate
            >

              {submitted && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                  <CheckCircle2
                    className="text-green-400 shrink-0"
                    size={20}
                  />

                  <p className="text-sm text-green-300">
                    Your inquiry is ready to send. Please complete the email from your email application.
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">

                <FormField
                  label="Full Name"
                  id="fullName"
                  value={form.fullName}
                  onChange={(v) => handleChange('fullName', v)}
                  error={errors.fullName}
                  placeholder="John Doe"
                />

                <FormField
                  label="Business Email"
                  id="businessEmail"
                  type="email"
                  value={form.businessEmail}
                  onChange={(v) => handleChange('businessEmail', v)}
                  error={errors.businessEmail}
                  placeholder="john@company.com"
                />

              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <FormField
                  label="Company"
                  id="company"
                  value={form.company}
                  onChange={(v) => handleChange('company', v)}
                  error={errors.company}
                  placeholder="Company Inc."
                />

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) =>
                      handleChange('service', e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-text ${
                      errors.service
                        ? 'border-red-500/50'
                        : 'border-border'
                    } focus:outline-none focus:border-primary/50 transition-colors`}
                  >
                    <option value="">
                      Select a service...
                    </option>

                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="text-xs text-red-400 mt-1.5">
                      {errors.service}
                    </p>
                  )}
                </div>

              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Project Details
                </label>

                <textarea
                  id="details"
                  value={form.details}
                  onChange={(e) =>
                    handleChange('details', e.target.value)
                  }
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-text resize-none ${
                    errors.details
                      ? 'border-red-500/50'
                      : 'border-border'
                  } focus:outline-none focus:border-primary/50 transition-colors`}
                  placeholder="Tell us about your project, dataset size, timeline, and requirements..."
                />

                {errors.details && (
                  <p className="text-xs text-red-400 mt-1.5">
                    {errors.details}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send size={18} />
                Send Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-text mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-text ${
          error
            ? 'border-red-500/50'
            : 'border-border'
        } focus:outline-none focus:border-primary/50 transition-colors`}
      />

      {error && (
        <p className="text-xs text-red-400 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
