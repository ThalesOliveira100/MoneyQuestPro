import { useEffect, useState } from 'react';
import { fetchUserById, updateUser } from '@/services/userService';
import { User } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, User as User_icon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CURRENT_USER_ID } from '@/data/currentUser';

const editProfileSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').optional(),
});

type EditProfileForm = z.infer<typeof editProfileSchema>;

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EditProfileForm>({
    resolver: zodResolver(editProfileSchema),
  });

  useEffect(() => {
    fetchUserById(CURRENT_USER_ID)
      .then((user) => {
        setUser(user);
        form.reset({
          name: user.name,
          email: user.email,
          password: user.password || '',
        });
      })
      .catch((err) => {
        console.error('Erro ao buscar usuário', err);
        setError('Não foi possível carregar os dados do usuário.');
      });
  }, [form]);

  const onSubmit = async (data: EditProfileForm) => {
    setIsLoading(true);

    await new Promise((resolve) => updateUser(CURRENT_USER_ID, data).then(resolve));

    console.log('Profile updated:', data);
    setIsLoading(false);
    navigate('/profile');
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Carregando...</p>;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/profile')}
            className="mr-4"
            size="sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Editar Perfil</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User_icon className="h-5 w-5 mr-2" />
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Nova senha"
                          {...field}
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-4 pt-4">
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    {isLoading ? (
                      'Salvando...'
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Salvar Alterações
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/profile')}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Info extra */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Dica de Segurança:</strong> Nunca compartilhe suas informações pessoais com
                terceiros.
              </p>

              <p>Em caso de dúvidas, entre em contato com nosso suporte.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;
