import { Injectable } from '@angular/core';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  articles: Article[] = [
    {
      id: 1,
      title: "Getting Started with HTML",
      image: "article1.svg",
      subtitle: "Learn the basics of HTML for web development",
      content: `
        HTML (Hypertext Markup Language) is the foundation of web development. If you're new to web development, understanding HTML is the first step to creating web pages.
  
        HTML uses a set of elements and tags to structure the content on a webpage. These elements include headings, paragraphs, links, images, and more. In this article, we'll explore the fundamentals of HTML and guide you through creating your first webpage.
  
        ### HTML Document Structure
  
        An HTML document is structured using elements enclosed in tags. Here's a basic HTML document structure:
  
        <!DOCTYPE html>
        <html>
          <head>
            <title>My First Web Page</title>
          </head>
          <body>
            <h1>Welcome to My Website</h1>
            <p>This is a paragraph of text.</p>
            <a href="#">Click me</a>
          </body>
        </html>
  
        ### Key HTML Elements
  
        - <!DOCTYPE html>: This declaration defines the document type and version of HTML being used.
        - <html>: The root element that wraps all other elements on the page.
        - <head>: Contains meta-information about the document, such as the title.
        - <title>: Sets the title of the webpage, displayed in the browser's title bar or tab.
        - <body>: Contains the visible content of the webpage.
        - <h1>: Represents a top-level heading.
        - <p>: Defines a paragraph of text.
        - <a>: Creates hyperlinks.
  
        ### Creating Your First Webpage
  
        To create your first webpage, follow these steps:
  
        1. Open a text editor.
        2. Copy the HTML structure above into your editor.
        3. Save the file with a .html extension (e.g., index.html).
        4. Open the file in a web browser.
  
        Congratulations! You've just created your first webpage using HTML. You can now start adding more content and styling to make it uniquely yours.
      `,
      date: new Date("2023-09-01"),
    },
    {
      id: 2,
      title: "Mastering CSS Layouts",
      image: "article2.svg",
      subtitle: "Achieve pixel-perfect layouts with CSS",
      content: `
        Cascading Style Sheets (CSS) is a powerful language for controlling the layout and styling of web pages. When combined with HTML, CSS allows you to create visually stunning and responsive web designs. In this article, we'll dive deep into CSS layouts, including Flexbox and Grid, to help you achieve pixel-perfect layouts for your web projects.
  
        ### Understanding CSS Layouts
  
        CSS provides several layout techniques to position and arrange elements on a webpage. Two of the most popular methods are Flexbox and Grid:
  
        #### Flexbox Layout
  
        Flexbox, short for Flexible Box, is designed for one-dimensional layouts, making it perfect for aligning items in a single row or column. It's ideal for navigation menus, card layouts, and centering content.
  
        Here's a simple example of a flexbox layout:
  
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        #### Grid Layout
  
        CSS Grid Layout is a two-dimensional system, allowing you to define rows and columns to create complex layouts. It's excellent for creating grid-based designs, such as magazine layouts or image galleries.
  
        Here's a basic grid layout:
  
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
  
        ### Responsive Design
  
        Responsive design is a crucial aspect of modern web development. With CSS, you can make your web pages adapt gracefully to different screen sizes and devices. Media queries, viewport units, and flexible grids are some of the techniques we'll cover in this article to achieve responsive layouts.
  
        ### Putting It All Together
  
        To master CSS layouts, you'll need practice. We'll provide hands-on examples and exercises to reinforce your understanding of Flexbox and Grid. By the end of this article, you'll be well on your way to creating stunning, responsive web layouts.
      `,
      date: new Date("2023-09-03"),
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      image: "article3.svg",
      subtitle: "Learn the basics of JavaScript for web development",
      content: `
        JavaScript is the scripting language of the web, and it plays a pivotal role in making web pages interactive and dynamic. In this article, we'll delve into JavaScript fundamentals, including variables, functions, and control structures, to give you a solid foundation for web development.
  
        ### Variables and Data Types
  
        In JavaScript, variables are used to store and manipulate data. They come in various data types, such as numbers, strings, and booleans. Here's how you declare variables:
  
        let name = "John";
        const age = 30;
        var isStudent = true;
  
        ### Functions
  
        Functions are blocks of reusable code that perform specific tasks. They allow you to encapsulate logic and execute it when needed. Here's a simple function declaration:
  
        function greet(name) {
          return "Hello, " + name + "!";
        }
  
        ### Control Structures
  
        Control structures, including if statements, loops, and switch statements, enable you to control the flow of your JavaScript code. For example, you can use an if statement to create conditional logic:
  
        let score = 85;
  
        if (score >= 90) {
          console.log("A grade");
        } else if (score >= 80) {
          console.log("B grade");
        } else {
          console.log("C grade or below");
        }
  
        ### DOM Manipulation
  
        One of JavaScript's key roles in web development is manipulating the Document Object Model (DOM). You can use JavaScript to access, modify, and create HTML elements dynamically. This article will introduce you to basic DOM manipulation techniques.
  
        ### Putting It into Practice
  
        Throughout this article, we'll provide hands-on coding examples and exercises to reinforce your understanding of JavaScript fundamentals. By the end, you'll be equipped with the knowledge and skills to start building interactive
      `,
      date: new Date("2023-09-05"),
    },
  ];

  getArticles(): Article[]{
    return this.articles;
  }

  getArticle(id: number): Article | null{
    const article = this.articles.find(x => x.id == id);
    if(article){
      return article;
    }
    else{
      return null;
    }
  }

  getLatestArticles(): Article[]{
    return this.articles.slice(0, 3);
  }
}
