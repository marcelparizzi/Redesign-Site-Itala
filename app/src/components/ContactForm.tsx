import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/schemas/forms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      // Aqui você envia os dados para seu servidor
      console.log('Form data:', data);
      
      // Exemplo com fetch:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // Reset form após sucesso
      form.reset();
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 max-w-lg mx-auto">
      {/* Name Field */}
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          {...form.register('name')}
          aria-invalid={form.formState.errors.name ? 'true' : 'false'}
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          {...form.register('email')}
          aria-invalid={form.formState.errors.email ? 'true' : 'false'}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(51) 99922-3888"
          {...form.register('phone')}
          aria-invalid={form.formState.errors.phone ? 'true' : 'false'}
        />
        {form.formState.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Escreva sua mensagem aqui..."
          rows={5}
          {...form.register('message')}
          aria-invalid={form.formState.errors.message ? 'true' : 'false'}
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full"
      >
        {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
}
