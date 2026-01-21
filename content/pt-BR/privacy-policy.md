---
title: Política de Privacidade
lastUpdated: December 20, 2025
---

# Política de Privacidade

**Última Atualização: 20 de dezembro de 2025**

Esta Política de Privacidade descreve como Nathalia Thomas @ Inventa Labs 💡 ("nós", "nosso" ou "nos") coleta, usa e protege suas informações quando você usa o aplicativo móvel Emojify Text (o "App").

## 1. Informações que Coletamos

### 1.1 Conteúdo Gerado pelo Usuário

Quando você usa o Emojify Text, coletamos as seguintes informações:

- **Entrada de Texto:** O texto que você insere no App para converter em emojis (limitado a no máximo 1.000 caracteres)
- **Resultados de Emoji:** As sugestões de emoji geradas em resposta à sua entrada (até 5 opções por solicitação)
- **Carimbos de Data/Hora:** A data e hora em que você gera conversões de emoji
- **Configuração do App:** Configurações opcionais como preferência de idioma, contagem de emojis, paleta de cores e versão do iOS para compatibilidade

### 1.2 Informações Coletadas Automaticamente

O App pode coletar automaticamente certas informações sobre seu dispositivo e uso, incluindo:

- Informações do dispositivo (modelo, versão do sistema operacional)
- Estatísticas de uso do App
- Logs de erro e relatórios de falha
- Tokens de App Check para verificação de segurança (Firebase App Check)
- Dados de limitação de taxa para prevenir abuso (contagem de solicitações e carimbos de data/hora)
- Dados relacionados à publicidade (identificadores de dispositivo incluindo IDFA se permitido, endereço IP, dados de interação com anúncios) coletados pelo Google AdMob para fins de veiculação e medição de anúncios

## 2. Como Usamos Suas Informações

Usamos as informações que coletamos para:

- Fornecer a funcionalidade principal do App (converter texto em sugestões de emoji)
- Armazenar seu histórico de conversão localmente em seu dispositivo
- Melhorar o desempenho e a experiência do usuário do App
- Diagnosticar e corrigir problemas técnicos

## 3. Armazenamento de Dados

### 3.1 Armazenamento Local

Seu histórico de conversão (entrada de texto, resultados de emoji e carimbos de data/hora) é armazenado localmente em seu dispositivo usando iOS UserDefaults. Esses dados:

- Permanecem em seu dispositivo e não são transmitidos para nossos servidores
- Podem ser incluídos no backup do iCloud do seu dispositivo se você tiver o Backup do iCloud habilitado
- Podem ser excluídos a qualquer momento através do recurso de histórico do App

### 3.2 Armazenamento em Nuvem

Usamos serviços Firebase para:

- **Firebase Cloud Functions:** Processar sua entrada de texto e gerar sugestões de emoji usando Google Gemini AI (modelo gemini-2.0-flash-lite)
- **Firebase App Check:** Verificar que as solicitações vêm de instâncias de app autenticadas e não modificadas para prevenir abuso e acesso não autorizado
- **Firebase Firestore:** Armazenar dados de limitação de taxa (contagens de solicitações e carimbos de data/hora) para impor limites de uso justo
- **Firebase Analytics:** Entender como o App é usado (se habilitado)
- **Registro de Erros:** Coletar relatórios de falha e informações de erro para melhorar o App

A filtragem de conteúdo é realizada pelos filtros de segurança integrados do Google Gemini AI, que configuramos para bloquear conteúdo inadequado. O conteúdo é filtrado em quatro categorias específicas de dano:

- **Assédio:** Conteúdo que assedia, intimida ou ameaça outros
- **Discurso de Ódio:** Conteúdo que promove ódio, discriminação ou violência contra indivíduos ou grupos
- **Conteúdo Sexualmente Explícito:** Conteúdo sexualmente explícito ou pornográfico
- **Conteúdo Perigoso:** Conteúdo que promove violência, autolesão ou atividades ilegais

Os filtros de segurança do Google Gemini AI estão configurados para bloquear conteúdo com probabilidade BAIXA, MÉDIA ou ALTA de dano nessas categorias. O conteúdo que viola essas políticas será rejeitado e você receberá uma mensagem de erro indicando que o conteúdo viola nossa política de conteúdo.

## 4. Serviços de Terceiros

### 4.1 Google Gemini AI

Para gerar sugestões de emoji, enviamos sua entrada de texto para o serviço Google Gemini AI. Quando você usa o Emojify Text:

- Sua entrada de texto é transmitida para os servidores do Google para processamento
- O serviço de IA do Google analisa seu texto e gera sugestões de emoji
- O Google pode processar e armazenar sua entrada de texto de acordo com suas práticas de privacidade
- Não controlamos como o Google processa seus dados depois que são enviados para seu serviço

Para mais informações sobre como o Google trata seus dados, consulte a [Política de Privacidade do Google](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

Usamos Firebase, um serviço fornecido pelo Google, para:

- Processamento de backend através de Cloud Functions
- Analytics e estatísticas de uso (se habilitado)
- Relatórios de erro e analytics de falhas

O Firebase está sujeito às práticas de privacidade do Google. Para mais informações, consulte a [Política de Privacidade do Firebase](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

Usamos Google AdMob para exibir anúncios no App. Quando você usa o Emojify Text, o AdMob pode coletar e processar as seguintes informações:

- **Identificadores de Dispositivo:** Incluindo o Identificador para Anunciantes (IDFA) em dispositivos iOS, se você concedeu permissão para rastreamento
- **Endereço IP:** O endereço IP do seu dispositivo pode ser coletado para veicular anúncios relevantes
- **Informações do Dispositivo:** Informações sobre seu dispositivo, como modelo do dispositivo, versão do sistema operacional e configurações do dispositivo
- **Dados de Uso:** Informações sobre como você interage com anúncios, incluindo visualizações de anúncios, cliques e métricas de engajamento
- **Logs de Falha:** Informações técnicas relacionadas à veiculação de anúncios, incluindo relatórios de falha e logs de erro

Essas informações são usadas pelo AdMob para:

- Veicular anúncios personalizados ou não personalizados com base em suas preferências e consentimento
- Medir o desempenho e a eficácia dos anúncios
- Prevenir fraudes e garantir a qualidade dos anúncios
- Cumprir regulamentações publicitárias

A coleta e uso de dados do AdMob são regidos pelas práticas de privacidade do Google. Para mais informações sobre como o Google AdMob trata seus dados, consulte a [Política de Privacidade do Google](https://policies.google.com/privacy) e as [Informações de Privacidade do AdMob](https://support.google.com/admob/answer/6128543).

Você pode controlar a publicidade personalizada através das configurações de privacidade do seu dispositivo. No iOS, você pode gerenciar permissões de rastreamento através de Configurações → Privacidade e Segurança → Rastreamento.

## 5. Compartilhamento e Divulgação de Dados

Não vendemos, alugamos ou negociamos suas informações pessoais. No entanto, compartilhamos seus dados com os seguintes serviços de terceiros conforme necessário para fornecer a funcionalidade do App:

- **Google Gemini AI:** Sua entrada de texto é enviada para o serviço de IA do Google para gerar sugestões de emoji
- **Firebase (Google):** Seus dados podem ser processados e armazenados pelo Firebase para operações de backend
- **Google AdMob:** Identificadores de dispositivo, endereço IP, informações do dispositivo, dados de uso e logs de falha podem ser compartilhados com o AdMob para veicular e medir anúncios

Também podemos divulgar suas informações se exigido por lei ou para proteger nossos direitos e segurança.

## 6. Retenção de Dados

### 6.1 Dados Locais

Seu histórico de conversão armazenado localmente em seu dispositivo:

- É retido até que você o exclua através do App
- É limitado a no máximo 100 conversões recentes para prevenir crescimento ilimitado de armazenamento
- Pode ser limpo a qualquer momento usando os recursos de exclusão de histórico do App

### 6.2 Dados em Nuvem

Dados processados através do Firebase e Google Gemini AI:

- São processados temporariamente para gerar sugestões de emoji
- Podem ser retidos pelo Google de acordo com suas políticas de retenção de dados
- Não armazenamos sua entrada de texto ou resultados de emoji em nossos servidores após o processamento
- Dados de limitação de taxa (contagens de solicitações e carimbos de data/hora) são armazenados no Firebase Firestore e são usados exclusivamente para impor limites de uso

## 7. Seus Direitos e Escolhas

### 7.1 Acesso e Exclusão

Você tem o direito de:

- Visualizar seu histórico de conversão dentro do App
- Excluir itens individuais do histórico a qualquer momento
- Limpar todos os dados de histórico do seu dispositivo

### 7.2 Portabilidade de Dados

Seu histórico de conversão é armazenado localmente em seu dispositivo. Você pode acessar esses dados através do recurso de histórico do App.

### 7.3 Opt-Out

Se você não quiser que seus dados sejam processados por serviços de terceiros, você pode parar de usar o App. O App requer processamento de dados pelo Google Gemini AI para funcionar.

## 8. Privacidade de Crianças

O Emojify Text não é destinado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se você acredita que coletamos informações de uma criança menor de 13 anos, entre em contato conosco imediatamente.

## 9. Segurança

Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações:

- Sanitização de entrada para prevenir vulnerabilidades de segurança
- Filtragem e validação de conteúdo para bloquear conteúdo inadequado ou prejudicial
- Detecção de injeção de prompt para prevenir manipulação do sistema de IA
- Limitação de taxa para prevenir abuso
- Comunicação segura de API usando HTTPS
- Armazenamento seguro de chaves de API e credenciais sensíveis

Implementamos limitação de taxa para prevenir abuso: os usuários estão limitados a 10 solicitações por minuto. Solicitações que excedem esse limite serão temporariamente bloqueadas até que a janela de limite de taxa seja redefinida.

No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Embora nos esforcemos para proteger suas informações, não podemos garantir segurança absoluta.

## 10. Transferências Internacionais de Dados

Suas informações podem ser transferidas e processadas em países diferentes do seu país de residência. Quando você usa o Emojify Text, seus dados podem ser processados por:

- Servidores do Google, que podem estar localizados em vários países
- Serviços Firebase, que operam globalmente

Ao usar o App, você consente com a transferência de suas informações para esses países.

## 11. Alterações nesta Política de Privacidade

Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações por:

- Publicar a nova Política de Privacidade nesta página
- Atualizar a data "Última Atualização" no topo desta política

Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações nesta Política de Privacidade entram em vigor quando são publicadas nesta página.

## 12. Entre em Contato

Se você tiver alguma dúvida sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco em:

- Email: [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Página de Suporte: [Visite nossa página de Suporte](/support/)

**Última Atualização: 20 de dezembro de 2025**
