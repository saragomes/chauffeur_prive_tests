Feature: Sign Out feature

Background:
  Given The user arrives on the welcome page
  When I go to Sign In page
		And I Sign In with credentials sara_nascimento@hotmail.com and Bonjour3
	Then I should be redirected to order page
		And I should be successfully authenticated as Sara Gomes

@sign_out
@automated
Scenario: An authenticated user can be able to sign out
	When I try to Sign Out
	Then I should not be authenticated