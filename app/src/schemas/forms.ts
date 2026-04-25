import { z } from 'zod';

/**
 * Schema de validação para o formulário de contato
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome não pode ter mais de 100 caracteres'),
  email: z
    .string()
    .email('Email inválido'),
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 'Telefone inválido'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem não pode ter mais de 1000 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Schemas adicionais para outros formulários
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Email inválido'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
