Feature: Login Feature kasirAja
    Scenario Outline: Login with data
        
        Given Website homepage
        When User input <email> and <password>
        When User click login button
        Then User should see dashboard page kasirAja


        Examples:
        |       email          | password | 
        | emailaja@yopmail.com |   12345  | 
