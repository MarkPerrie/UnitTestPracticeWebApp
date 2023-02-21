This is the repo for the back end of the application. This is written in Flask.py which is a Python package that allows the building of a webserver using python

As the repo is written in Python we will be conducting unit tests using pytest with the docs being here https://docs.pytest.org/en/7.2.x/

Here is an example of a typical unit test in Pytest: 

from api import app # Flask instance of the API

from project.models import User

def test_new_user():
    """
    ARRANGE a User model
    ACT a new User is created
    ASSERT check the email, hashed_password, and role fields are defined correctly
    """
    user = User('patkennedy79@gmail.com', 'FlaskIsAwesome')
    assert user.email == 'patkennedy79@gmail.com'
    assert user.hashed_password != 'FlaskIsAwesome'
    assert user.role == 'user'


Unit tests come in 3 steps Arrange, Act and Assert. ARRANGE is where we setup what we want to test (including anything the unit relies on being mocked). ACT is where we do something to invoke the conditions we are testing (pressing a button for example). ASSERT is where we check that the correct state in the unit was reached after we performed some actions. We can see in the example above the comments denote what each section is. This structure is not unique to pytest but a language agnostic structure to unit tests. The above example will just render the webpage from that url, click on the button with the text 'Load Greeting' and then check that the correct text has been rendered and the previous button disabled