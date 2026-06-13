Port Russell API
Authentification
Connexion

POST /auth/login
Permet de connecter un utilisateur.


Exemple de requête :

{
  "email": "amelie@test.fr",
  "password": "123456"
}
Réponse :
{
  "message": "Connexion réussie",
  "token": "JWT_TOKEN"
}


Catways :
Obtenir tous les catways
GET /catways

Obtenir un catway
GET /catways/:id

Ajouter un catway
POST /catways

Modifier un catway
PUT /catways/:id

Supprimer un catway
DELETE /catways/:id


Réservations :
Obtenir toutes les réservations
GET /reservations

Obtenir une réservation
GET /reservations/:id

Ajouter une réservation
POST /reservations

Modifier une réservation
PUT /reservations/:id

Supprimer une réservation
DELETE /reservations/:id

Utilisateurs : 

Obtenir tous les utilisateurs
GET /users

Obtenir un utilisateur
GET /users/:email

Ajouter un utilisateur
POST /users

Modifier un utilisateur
PUT /users/:email

Supprimer un utilisateur
DELETE /users/:email