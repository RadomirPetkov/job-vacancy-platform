
<h3 align="center">Job vacancy platform</h3>

## About The Project

This project is created for educational purposes only. The main idea is to create a platform where companies can publish their job offers and every jobseeker can apply for them.

### Built With

* [![React][React.js]][React-url]

## Getting Started

### Installation
To get a local copy up and running follow these simple example steps.

1. Clone the repo
   ```sh
   git clone https://github.com/RadomirPetkov/job-vacancy-platform.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run local backend server (this resource is provided by Softuni)
   ```js
   node ./server.js
   ```
4. Start the app (runs at https://localhost:3000 by default)
   ```js
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage
### Features

The platform has a public part open for all users and a private part that is accessible only by logged in user

The public part cosists of :
 - Home page with latest 3 published job offers (at https://localhost:3000)
 - Catalog page with all the published job offers (at https://localhost:3000/catalog)
 - Details page containing more information about every job offer (at https://localhost:3000/details/:offerId)
 - Page for registration of new users that can be a "jobseekers" or "company" (at https://localhost:3000/registration)
 - Page for login (at https://localhost:3000/login)
 
 The private part consists of :
 - My profile page for showing and editting additional information for the user (at https://localhost:3000/profile/:profileId)
 
 1. If the user is a company:
 - A page for creating a new job offer (at https://localhost:3000/create)
 - Additional functionalities at the offer details page for editing and deleting every published by the same user offer 
 
 
2. If the user is a jobseeker:
 - Additional functionality to apply for job offers, accessible by the details page of every offer

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contacts

Radomir Petkov - email: Radomirpetkov@abv.bg

## Acknowledgments
The backend server is provided by SoftUni Bulgaria. You can find more information about it by this [Documentation] link


[Documentation]: https://github.com/softuni-practice-server/softuni-practice-server
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
