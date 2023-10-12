Feature: User shopps

Background: Open main page
    Given User opens the main page
    And Users logs in
@shopping
Scenario: User adds items to cart
    When User accesses the Desktop category
    When User adds 1 item to cart
    When User opens and asserts items in the cart
    When User increases the quantity & updates the cart
    Then User checks out
    And User asserts the order was sent