Feature: Login Feature kasirAja
    Scenario Outline: Login with data
        
        Given Website homepage
        When User input <email> and <password>
        Then User click login button

        Examples:
        |       email          | password |
        | emailaja@yopmail.com |   12345  |
