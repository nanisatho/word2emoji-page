---
title: Suporte e Contato
---

# Suporte e Contato

Estamos aqui para ajudar! Se você tiver dúvidas, precisar de assistência ou quiser relatar um problema com o Emojify Text, não hesite em entrar em contato.

## Entre em Contato

Para consultas de suporte, entre em contato conosco em:

- **Email:** [info@inventa-labs.com](mailto:info@inventa-labs.com)

Nosso objetivo é responder a todas as consultas em até 48 horas durante os dias úteis.

## Perguntas Frequentes

### Como o Emojify Text funciona?

O Emojify Text usa inteligência artificial (modelo gemini-2.0-flash-lite do Google Gemini AI) para converter sua entrada de texto em representações de emoji. Simplesmente insira texto (até 1.000 caracteres) e o App gerará até 5 opções de emoji para você escolher. Você pode configurar o número de emojis retornados (de 1 a 5) e selecionar preferências de cor.

### Meus dados são privados?

Seu histórico de conversão é armazenado localmente em seu dispositivo. No entanto, sua entrada de texto é enviada para o Google Gemini AI para processamento. Por favor, revise nossa [Política de Privacidade](/privacy-policy/) para informações detalhadas sobre coleta e uso de dados.

### Posso excluir meu histórico?

Sim! Você pode excluir itens individuais do histórico ou limpar todo o histórico através do recurso de histórico do App. Seus dados são armazenados localmente em seu dispositivo, então você tem controle total sobre eles.

### Por que preciso de uma conexão com a internet?

O Emojify Text requer uma conexão com a internet porque usa o Google Gemini AI para gerar sugestões de emoji. O App faz chamadas de rede seguras para Firebase Cloud Functions, que processam sua entrada de texto usando o Google Gemini AI e retornam opções de emoji. O App também usa o Firebase App Check para verificar a autenticidade do app e garantir comunicação segura.

### E se o App não estiver funcionando?

Se você estiver enfrentando problemas:

- Verifique sua conexão com a internet
- Certifique-se de que não excedeu o limite de taxa (10 solicitações por minuto - tente novamente após um minuto)
- Verifique se sua entrada está entre 1 e 1.000 caracteres e contém texto válido
- Verifique se sua versão do iOS suporta o App (iOS 14.0 ou posterior recomendado para todos os recursos)
- Reinicie o App
- Se os problemas persistirem, entre em contato conosco em [info@inventa-labs.com](mailto:info@inventa-labs.com)

### Existem restrições de idade?

O Emojify Text é destinado a usuários com pelo menos 13 anos de idade. Usuários menores de 13 anos devem usar o App com supervisão dos pais.

### Posso usar os emojis gerados comercialmente?

Sim, você pode usar as sugestões de emoji geradas pelo App para fins pessoais ou comerciais. No entanto, por favor, revise nossos [Termos de Serviço](/terms-of-service/) para detalhes completos.

### Quão precisas são as sugestões de emoji?

As sugestões de emoji são geradas por IA (modelo gemini-2.0-flash-lite do Google Gemini AI) e podem variar em precisão e apropriação. Fornecemos até 5 opções por solicitação para que você possa escolher o emoji mais adequado para suas necessidades. O App também suporta preferências de idioma e filtros de paleta de cores para ajudar a refinar os resultados. Por favor, revise as sugestões antes do uso.

### Quais idiomas o Emojify Text suporta?

O Emojify Text suporta os seguintes idiomas para descrições de emoji:

- Inglês (en)
- Espanhol (es)
- Francês (fr)
- Alemão (de)
- Italiano (it)
- Japonês (ja)
- Coreano (ko)
- Português - Brasileiro (pt-BR)
- Russo (ru)
- Chinês - Simplificado (zh-Hans)

Nota: Embora as descrições possam estar em qualquer idioma suportado, o campo "vibe" nos resultados sempre permanece em inglês.

### Por que meu conteúdo foi bloqueado?

O Emojify Text implementa filtragem de conteúdo para manter um serviço seguro e apropriado. A filtragem de conteúdo é realizada principalmente pelos filtros de segurança integrados do Google Gemini AI, que configuramos para bloquear conteúdo inadequado. Sua entrada pode ser bloqueada se violar nossa política de conteúdo, que restringe:

- Conteúdo de assédio ou ameaça
- Discurso de ódio ou conteúdo discriminatório
- Conteúdo sexualmente explícito
- Conteúdo que promove violência, autolesão ou atividades ilegais
- Tentativas de manipular ou explorar o sistema de IA

**Nota:** Não somos responsáveis por conteúdo que os filtros de segurança do Gemini não detectam. Você deve sempre revisar o conteúdo gerado por IA antes do uso. Se você receber uma mensagem de que seu conteúdo viola nossa política de conteúdo, por favor, tente palavras ou frases diferentes. O App também aplica limites de comprimento de entrada e valida a entrada em nosso backend para prevenir abuso.

Além disso, solicitações que excedem os limites de tempo de processamento serão encerradas. As solicitações de API têm um timeout de 30 segundos para processamento de IA, e a execução geral da função tem um limite de timeout de 60 segundos. A validação de entrada também é aplicada: seu texto deve estar entre 1 e 1.000 caracteres (após remover espaços), conter caracteres UTF-8 válidos e não pode estar vazio ou conter apenas espaços em branco. Se sua solicitação expirar ou falhar na validação, você receberá uma mensagem de erro e poderá tentar novamente. Para mais informações, por favor, revise nossos [Termos de Serviço](/terms-of-service/).

### O que acontece se minha solicitação expirar?

O Emojify Text tem limites de timeout integrados para garantir serviço responsivo e prevenir que solicitações fiquem penduradas indefinidamente. Se sua solicitação exceder esses limites, será automaticamente encerrada:

- **Timeout de Processamento de API:** 30 segundos para processamento de IA pelo Google Gemini AI
- **Timeout Geral da Função:** 60 segundos para o processamento completo da solicitação

Se sua solicitação expirar, você receberá uma mensagem de erro indicando que o serviço está temporariamente indisponível. Isso pode acontecer se:

- O processamento de IA levar mais tempo do que o esperado
- Houver problemas de conectividade de rede
- O serviço estiver experimentando alta carga

Se você encontrar um erro de timeout, por favor, tente novamente. A maioria das solicitações é concluída bem dentro dos limites de timeout. Erros de timeout podem ocorrer se sua entrada for muito longa (aproximando-se do limite de 1.000 caracteres) ou se houver problemas de conectividade de rede. Se você consistentemente experimentar erros de timeout, tente encurtar sua entrada ou verifique sua conexão com a internet. Se os problemas persistirem, entre em contato conosco em [info@inventa-labs.com](mailto:info@inventa-labs.com).

## Relatando Problemas

Se você encontrar um bug, erro ou tiver uma solicitação de recurso, por favor, envie-nos um email em [info@inventa-labs.com](mailto:info@inventa-labs.com) com as seguintes informações:

- Descrição do problema
- Passos para reproduzir (se aplicável)
- Modelo do dispositivo e versão do iOS
- Versão do App (se conhecida)
- Texto de entrada que causou o problema (se aplicável, observando que será tratado confidencialmente)
- Quaisquer mensagens de erro que você recebeu
- Capturas de tela (se útil)

### Limitação de Taxa

O Emojify Text aplica limitação de taxa para garantir uso justo e prevenir abuso:

- **Limite:** 10 solicitações por minuto por usuário
- **Janela:** As solicitações são contadas dentro de uma janela rolante de 60 segundos
- **O que acontece se eu exceder o limite?** Você receberá uma mensagem de erro "Limite de taxa excedido. Por favor, tente novamente mais tarde." Simplesmente aguarde a janela de limite de taxa ser redefinida (até 1 minuto) antes de tentar novamente.

### Limites de Entrada

O Emojify Text tem os seguintes requisitos e limites de entrada:

- **Comprimento Mínimo:** 1 caractere (após remover espaços em branco)
- **Comprimento Máximo:** 1.000 caracteres
- **Codificação de Caracteres:** Deve ser UTF-8 válido
- **Conteúdo:** Não pode estar vazio ou conter apenas espaços em branco
- **Sanitização de Entrada:** Bytes nulos e certos caracteres de controle são automaticamente removidos, e espaços em branco excessivos são normalizados

## Privacidade e Legal

Para informações sobre como tratamos seus dados, consulte nossa [Política de Privacidade](/privacy-policy/).

Para termos e condições de uso, consulte nossos [Termos de Serviço](/terms-of-service/).

## Feedback

Valorizamos seu feedback! Se você tiver sugestões para melhorar o Emojify Text, compartilhe conosco em [info@inventa-labs.com](mailto:info@inventa-labs.com).
