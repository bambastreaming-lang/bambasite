
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 📧 EmailJS - Configuración rápida (5 minutos):
      // 1. Ve a https://www.emailjs.com/ y crea cuenta gratuita (200 emails/mes gratis)
      // 2. Ve a "Email Services" → "Add New Service" → Elige "Gmail"
      // 3. Conecta tu cuenta de Gmail (bambastreaming@gmail.com)
      // 4. Ve a "Email Templates" → "Create New Template"
      // 5. Usa este template:
      //    Subject: Nuevo contacto desde Bamba Streaming - {{from_name}}
      //    Body: 
      //      Nombre: {{from_name}}
      //      Email: {{from_email}}
      //      Teléfono: {{phone}}
      //      Mensaje: {{message}}
      // 6. Copia el Service ID, Template ID y Public Key
      // 7. Reemplaza los valores abajo
      
      const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // ⬅️ Ejemplo: service_abc123
      const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // ⬅️ Ejemplo: template_xyz789
      const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // ⬅️ Ejemplo: abc123xyz789
      
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Fallback temporal - Muestra instrucciones
        alert('⚠️ El formulario necesita configuración de EmailJS.\n\nPor favor, configura EmailJS siguiendo las instrucciones en el código o contacta directamente a:\nbambastreaming@gmail.com');
        const mailtoLink = `mailto:bambastreaming@gmail.com?subject=Contacto desde la web - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
          `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setIsSubmitting(false);
        return;
      }

      // EmailJS configurado - Envío directo y confiable
      const response = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_email: 'bambastreaming@gmail.com'
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al enviar: ${errorText}`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contacta directamente a bambastreaming@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-12 sm:mb-16 md:mb-20 text-center">
        <span className="text-bamba-blue font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block">HABLEMOS</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black-bamba text-black uppercase italic tracking-tighter">CONTACTO</h2>
      </div>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-bamba-blue text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="text-3xl font-black-bamba mb-4 text-black uppercase">¡ENVIADO!</h3>
            <p className="text-gray-500 font-medium text-lg">Nos pondremos en contacto pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] font-black text-bamba-blue uppercase tracking-widest ml-4">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-bamba-yellow transition-all font-medium ${
                    errors.name ? 'ring-2 ring-red-500' : ''
                  }`}
                  placeholder="Tu nombre"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1 ml-4" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-black text-bamba-blue uppercase tracking-widest ml-4">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-bamba-yellow transition-all font-medium ${
                    errors.email ? 'ring-2 ring-red-500' : ''
                  }`}
                  placeholder="tu@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1 ml-4" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-[10px] font-black text-bamba-blue uppercase tracking-widest ml-4">
                Teléfono / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-bamba-yellow transition-all font-medium ${
                  errors.phone ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="+54 9 11 ..."
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-xs mt-1 ml-4" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-black text-bamba-blue uppercase tracking-widest ml-4">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-bamba-yellow transition-all font-medium resize-none ${
                  errors.message ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="¿En qué podemos ayudarte?"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1 ml-4" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-bamba-blue text-white font-black-bamba py-6 rounded-2xl hover:bg-black transition-all text-xl uppercase tracking-widest shadow-lg ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        )}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">O directamente a</p>
        <a href="mailto:bambastreaming@gmail.com" className="text-2xl md:text-3xl font-black-bamba text-black hover:text-bamba-yellow transition-colors break-words">bambastreaming@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactForm;
