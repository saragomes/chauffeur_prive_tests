Feature: Sign In feature

Background:
  Given The user arrives on the welcome page

@sign_in_valid_informations
@automated
Scenario Outline: Sign In with valid credentials
	When I go to Sign In page
	And I Sign In with credentials <email> and <password>
	Then I should be redirected to order page
		And I should be successfully authenticated as <first_name> <last_name>
	Examples:
		| email | password | first_name | last_name |
		| sara_nascimento@hotmail.com | Bonjour3 | Sara | Gomes |

@sign_in_invalid_credentials
@automated
Scenario Outline: Unsuccesfull Sign In with invalid credentials
	When I go to Sign In page
		And I Sign In with credentials <email> and <password>
	Then I should not be authenticated
		And an error should appear on Sign In form "Incorrect credentials. Please check and try again."
		And I should stay on Sign In page
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