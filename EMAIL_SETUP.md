# Configuration Email avec Resend

## 🚀 Installation et Configuration

### 1. Obtenir une clé API Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte ou connectez-vous
3. Allez dans la section "API Keys"
4. Créez une nouvelle clé API

### 2. Configuration de l'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
RESEND_API_KEY=votre_cle_api_resend_ici
```

### 3. Configuration du domaine (optionnel)

Pour utiliser un email personnalisé comme `noreply@votredomaine.com` :

1. Ajoutez votre domaine dans Resend
2. Configurez les enregistrements DNS
3. Modifiez l'email `from` dans `src/app/api/send-email/route.ts`

## 📧 Fonctionnalités

- ✅ Envoi d'email automatique à `lokoharris25@gmail.com`
- ✅ Template HTML professionnel avec toutes les informations
- ✅ Popup de succès avec détails de la consultation
- ✅ Gestion d'erreurs robuste
- ✅ Validation des champs requis

## 🔧 Personnalisation

### Modifier l'email de destination

Dans `src/app/api/send-email/route.ts`, ligne 25 :

```typescript
to: ['lokoharris25@gmail.com'], // Changez ici
```

### Modifier l'email d'expéditeur

Dans `src/app/api/send-email/route.ts`, ligne 24 :

```typescript
from: 'InnovyxWorks <noreply@InnovyxWorks.com>', // Changez ici
```

### Modifier le template email

Le template HTML se trouve dans `src/app/api/send-email/route.ts` dans la propriété `html`.

## 🧪 Test

1. Démarrez le serveur : `npm run dev`
2. Allez sur la page de contact
3. Remplissez le formulaire
4. Vérifiez que l'email arrive bien dans la boîte de réception

## 📝 Notes

- L'API est protégée contre les erreurs
- En cas d'échec d'envoi, l'utilisateur voit quand même le message de succès
- Tous les champs du formulaire sont inclus dans l'email
- La date et l'heure de consultation sont formatées en français
