Feature: Sign In feature

@sign_in_valid_informations
Scenario Outline: Sign In with valid credentials
Given I am on Sign In page
When I Sign In with credentials <email> and <password>
Then I should be successfully authenticated
And I should be redirected to order page
Examples:
| email | password |
| sara_nascimento@hotmail.com | Bonjour1234! |

@sign_in_invalid_credentials
Scenario Outline: Unsuccesfull Sign In with invalid credentials
Given I am on Sign In page
When I Sign In with credentials <email> and <password>
Then I should not be authenticated
And an error should appear on Sign In form "Les identifiants que vous avez rentrés ne sont pas corrects. Veuillez vérifier et réessayer."
And I should not be redirected to order page
Examples:
| email | password |
| invalid_email@hotmail.com | Bonjour1234! |
| sara_nascimento@hotmail.com | invalidPassword |

@sign_in_valid_facebook
Scenario Outline: Successfull Sign In with valid facebook account
Given I am on Sign In page
When I Sign In using facebook user <email> and <password> account
Then I should be successfully authenticated
Examples:
| email | password |
| sara_nascimento@hotmail.com | Bonjour1 |

@sign_in_invalid_facebook
Scenario Outline: Unsuccessfull Sign In with invalid facebook account
Given I am on Sign In page
When I Sign In using facebook user <email> and <password> account
Then I should not be authenticated
And a popin should appear with error message "Connexion à Facebook échouée"
And I should not be redirected to order page
Examples:
| email | password |
| sara_nascimento@hotmail.com | InvalidPassword |