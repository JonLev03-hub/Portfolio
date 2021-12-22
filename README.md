# Portfolio

This project was started because I desired a website that could creatively display projects I have created, my resume, and contact information on a website. Originally it was going to be hard coded, but durring the building process I thought it would be much easier to maintain if the project list was dynamically generated using Github's REST API. 

One Large Benifit when using this method is that now this project can be shared with other programmers that are new to the industry to display their work in a neat manner by simply changing a few variables. 


## Web Portfolio Page
This web portfolio page can display all your current repositories along with their descriptions, a resume that is inside the repository, contact information, and will have some neat properties. (Images coming soon)

## Setup
 <br />
Once you have cloned the repository onto your github for to use used on your github there is a little bit of setup needed so that it can get the correct information to display. 
 
### The Home Page
First to make sure that the website knows what account to look at go into the file called "bio.js" located in the js folder. assign the username variable (where it says jonlev03-hub) to your own account username.

Once that is complete you will need to create a github repository with the same name as your github profile. Displayed below is an image of my github repository. The welcome paragraph is set to the description of this repository since they will likely be conveying the same details. If you have already created a repository called the same as your username, you will be able to edit the description by clicking the settings icon inside of the "about" section in the right of the screen of the repository.

Note that this repository is automatically excluded from your portfolio page, one way to add this repository to the portfolio page is to star the repository on github.

### Adding Contact Information
The next step to setup the home page, you wll need to either delete the "frontImage.png" from the resources folder, or replace it with another image that you would like to display on the home page. Then go Ahead and replace the "contactImage.png" with an image that contains your contact information that can be displayed on the screen. Once this is done you should be able to use the contact button to display contact information on the home page. When using the button on other pages it will display the image as a model. 

### Adding a Resume
Adding your resume to the website is relatively streight forward. Simply navigate to the resources folder in your portfolio repository and replace the "Resume.PDF" file with your own resume pdf. This should allow users to open your resume through the website.

### Dynamic Portfolio Page
The most important part of this website is the portfolio page. This goes to github and dispalys all your current projects.

First to make sure that the website knows what account to look at, you will need to go to the js folder and find "portfolio.js" In this document you will need to assign the username variable to your account username (where it says jonlev03-hub). After updating and saving this you should see your repositories displayed in the portfolio page. Each project will have a title, a link at the bottom where the github logo is located. 

To properly setup the description for each project you will follow a simmilar process as earlier when setting up the welcome page. It pulls the description off of each repository, and displays it in the center of the block. To properly set this up you can either assign each repository a description upon initialization, or go back and click the settings icon inside of the about section of the repository on github. 

### Configuring the Project Order
Each project is listed in the same order as displayed in github, but one easy way to prioritize projects is to star them inside of your github account. If you star one of your projects it will add that project to the top of your projects list, thus displaying it first. 



## Future Work
<br />

I am very proud of the look and feel of this basic portfolio website but there is still much improvement to be done. 

#### 404 page
Inside the 404 page I will be adding a game that can be played as a simple easter egg on the site. 

#### Customization
I would like to add more custom features that will be pulled out of the users account readme that is used on the welcome page to create a more genuine feel for each portfolio.

#### Potential Error
There may be an error that will occure when you star projects from other users, this would likely cause the project list to end when the javascript gets to that project; messing up the website. Should be a simple fix, but I haven't gotten around to testing

#### Starred Only
I would like to add a toggle feature to only display starred projects if the website owner so chooses
