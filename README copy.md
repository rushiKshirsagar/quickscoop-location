#### 🎬 [Demo](https://synopai-backend-4789501fab85.herokuapp.com/getData/Sports)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 📝 About The Project


The project involves creating a web scraper designed to extract and compile a comprehensive set of information from news articles listed on Google News. The primary objective is to collect several key pieces of data from each article, enhancing accessibility and ease of analysis for the end-users. The data collected includes:

* Image: The main image associated with the news article, which often serves as a visual summary or highlight of the content.
* News Source Thumbnail Image: A smaller image representing the logo or a characteristic thumbnail of the source publication. This aids in quickly identifying the origin of the news article.
* URL of Article: The direct link to the full news article, enabling users to navigate to the original source for detailed reading.
  Google news has a proxy setup and does not provide the direct url to the article in the dom for scraping. 
* Title of the Article: The headline or title of the news piece, providing a succinct overview of the article's subject matter.
* Summary of the Article: A brief summary or an excerpt from the article, offering a quick insight into the main points or facts reported in the piece.
  The content of the article is scraped and sent to chatGpt for summarization. The length of the summary can be adjusted.

<p>This project leverages various web scraping and data extraction techniques to programmatically search through Google News listings, identifying and retrieving the specified elements for each article. The end result is a curated dataset or feed that can be used for a variety of applications, such as media monitoring, research, content aggregation platforms, or personal news consumption. Ensuring compliance with legal and ethical standards, including respect for copyright and the terms of service of the websites involved, is a critical aspect of the project's implementation.</p>

### Built With

* Node JS
* Express
* ChatGpt

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- GETTING STARTED -->
## Getting Started

### 😐 Prerequisites

* Node js
* Open AI key

### Installation

1. Get a free API Key at [OpenAI](https://platform.openai.com/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/rushiKshirsagar/QuickScoop-Backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the pipeline
   ```sh
   npm start
   ```
5. Enter your API in `.env`
   ```js
   OPEN_AI_API_KEY = 'ENTER YOUR API';
   ```
6. Get data for the respection collection @ localhost:3000/{collectionName}
   (Sports, Entertainment, Politics, Science, Technology, etc)
<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTRIBUTING -->
## 🤝🏼 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
