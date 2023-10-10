Feature: Register on NopCommerce Store
    @register
    Scenario: User registers
    Given User opens the main page
    When User opens the registration page
    And User fills in the registration
    Then User successfully registers