<div align="center">
  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  </div>

  <h3 align="center">API de Gerenciamento de Assinaturas</h3>
</div>

## 📋 Sumário
1. [🤖 Introdução](#introdução)  
2. [⚙️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
3. [🔋 Funcionalidades](#funcionalidades)  
4. [🤸 Começo Rápido](#começo-rápido)  
5. [🕸️ Trechos de Código](#trechos-de-código)  
6. [🔗 Recursos](#recursos)  
7. [🚀 Mais Informações](#mais-informações)  

---

## 🤖 Introdução <a name="introdução"></a>
Sistema completo para gerenciamento de assinaturas com:
- ✅ Autenticação JWT segura  
- 🔄 Renovação automática de planos  
- 📬 Lembretes inteligentes por e-mail  
- 📊 Dashboard administrativo  

**Comunidade de suporte:**  
<a href="https://discord.com/invite/n6EdbFJ" target="_blank">
  <img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" alt="Discord" height="30"/>
</a>

---

## ⚙️ Tecnologias Utilizadas <a name="tecnologias-utilizadas"></a>
| Backend         | Banco de Dados  | Infraestrutura   |
|-----------------|-----------------|------------------|
| Node.js 18+     | MongoDB Atlas   | Upstash Queue    |
| Express.js      | Mongoose ODM    | Vercel Serverless|
| JWT             | Redis           | Arcjet Security  |

---

## 🔋 Funcionalidades <a name="funcionalidades"></a>
- 🛡️ **Proteção Avançada**  
  Rate limiting e detecção de bots
- 🔄 **Workflows Automatizados**  
  Agendamento de e-mails com Upstash
- 💳 **Gateway de Pagamentos**  
  Integração com Stripe/PayPal
- 📈 **Métricas em Tempo Real**  
  Gráficos de retenção de usuários

---

## 🤸 Começo Rápido <a name="começo-rápido"></a>

### Pré-requisitos

Siga estas etapas para configurar o projeto localmente em sua máquina.

**Pré-requisitos**

Certifique-se de ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Gerenciador de Pacotes de Nó)

**Clonando o Repositório**

```bash
git clone https://github.com/adrianhajdin/subscription-tracker-api.git
cd subscription-tracker-api
```

**Installation**

Instale as dependências do projeto usando npm:

```bash
npm install
```


**Configurar variáveis ​​de ambiente**

Crie um novo arquivo chamado `.env.local` na raiz do seu projeto e adicione o seguinte conteúdo:

```env
# PORTA
PORT=5500
SERVER_URL="http://localhost:5500"

# AMBIENTE
NODE_ENV=development

# BANCO DE DADOS
DB_URI=

# JWT
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Executando o Projeto**

```bash
npm run dev
```

Abrir [http://localhost:5500](http://localhost:5500) no seu navegador ou em qualquer cliente HTTP para testar o projeto.

## <a name="snippets">🕸️ Trechos de Código </a>

<details>
<summary><code>Dados JSON fictícios</code></summary>

```json
{
  "name": "Javascript Mastery Elite Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

</details>


## 🔗 Recursos <a name="recursos"></a>

- [Documentação Oficial MongoDB](https://www.mongodb.com/docs/)  
- [Guia de Implementação JWT](https://jwt.io/introduction)  
- [Tutoriais Upstash](https://upstash.com/docs)  

---

## 🚀 Mais Informações <a name="mais-informações"></a>

[![Deploy na Vercel](https://vercel.com/button)](https://subscription-ecru-phi.vercel.app/)  

* **Desenvolvido por:** [ JavaScript Mastery ]   


[⬆️ Voltar ao Topo](#sumário)