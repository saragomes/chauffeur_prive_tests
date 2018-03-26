Feature: Sign Out feature

@sign_out
Scenario: Authenticate user can sign out
Given I am authenticated
When I try to Sign Out
Then I should not be authenticated
And I should be redirected to Sign In page