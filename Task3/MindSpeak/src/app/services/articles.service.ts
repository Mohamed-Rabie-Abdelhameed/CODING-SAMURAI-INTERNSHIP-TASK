import { Injectable } from '@angular/core';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  articles: Article[] = [
    {
      id: 1,
      title: 'Getting Started with HTML',
      image: 'article1.svg',
      subtitle: 'Learn the basics of HTML for web development',
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
      date: new Date('2023-09-01'),
    },
    {
      id: 2,
      title: 'Mastering CSS Layouts',
      image: 'article2.svg',
      subtitle: 'Achieve pixel-perfect layouts with CSS',
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
      date: new Date('2023-09-03'),
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      image: 'article3.svg',
      subtitle: 'Learn the basics of JavaScript for web development',
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
      date: new Date('2023-09-05'),
    },
    {
      id: 4,
      title: 'Responsive Web Design with CSS',
      image: 'article4.svg',
      subtitle: 'Create websites that adapt to various devices',
      content: `
        Responsive web design is essential in today's digital landscape. With an increasing variety of devices and screen sizes, ensuring your website looks great on all of them is crucial. In this article, we'll explore responsive design techniques using CSS, including media queries, flexible layouts, and viewport units.
  
        ### Media Queries
  
        Media queries allow you to apply different CSS styles based on the user's device characteristics, such as screen width. By using media queries, you can create styles tailored to specific screen sizes, making your website responsive.
  
        ### Flexible Layouts
  
        Creating flexible layouts is key to responsive design. We'll dive deeper into CSS Flexbox and CSS Grid to demonstrate how to build fluid, adaptive layouts that adjust seamlessly to different screen sizes.
  
        ### Viewport Units
  
        Viewport units like vw (viewport width) and vh (viewport height) enable you to create CSS styles that respond directly to the dimensions of the user's device. These units are particularly useful for font sizing and spacing in responsive designs.
  
        ### Testing and Debugging
  
        We'll also discuss best practices for testing and debugging your responsive design to ensure a smooth user experience across various devices.
  
        By the end of this article, you'll have the skills to create responsive web designs that look great on desktops, tablets, and smartphones.
      `,
      date: new Date('2023-09-10'),
    },
    {
      id: 5,
      title: 'Front-End Frameworks: Angular, React, and Vue',
      image: 'article5.svg',
      subtitle: 'A comparison of popular front-end frameworks',
      content: `
        Front-end development has been revolutionized by the emergence of powerful JavaScript frameworks. In this article, we'll compare and contrast three of the most popular front-end frameworks: Angular, React, and Vue.
  
        ### Angular
  
        Angular is a comprehensive front-end framework developed by Google. It provides a robust structure for building complex web applications with features like two-way data binding, dependency injection, and a powerful CLI (Command Line Interface).
  
        ### React
  
        React, developed by Facebook, is known for its component-based architecture. It's highly flexible and focuses on the "virtual DOM" for efficient rendering. React's ecosystem includes React Native for building mobile apps.
  
        ### Vue
  
        Vue is a progressive framework that's easy to integrate into existing projects. It offers a gentle learning curve and provides features like single-file components and reactivity.
  
        ### Choosing the Right Framework
  
        We'll discuss the strengths and weaknesses of each framework and provide guidance on how to choose the right one for your project based on factors like complexity, community support, and personal preferences.
  
        Whether you're new to front-end development or considering switching frameworks, this article will help you make an informed decision.
      `,
      date: new Date('2023-09-15'),
    },
    {
      id: 6,
      title: 'Optimizing Web Performance',
      image: 'article6.svg',
      subtitle: "Boost your website's speed and efficiency",
      content: `
        Web performance is a critical factor in user satisfaction and search engine rankings. Slow-loading websites can drive users away and impact your SEO. In this article, we'll explore techniques and best practices for optimizing web performance.
  
        ### Minification and Compression
  
        Minifying and compressing your HTML, CSS, and JavaScript files can significantly reduce load times. We'll show you how to use tools and techniques to automate this process.
  
        ### Image Optimization
  
        Images are often the largest assets on a webpage. We'll discuss how to optimize images without sacrificing quality, including choosing the right file formats and using responsive images.
  
        ### Lazy Loading
  
        Lazy loading is a technique that defers the loading of non-essential content until it's needed. This can dramatically improve initial page load times and enhance the user experience.
  
        ### Content Delivery Networks (CDNs)
  
        CDNs distribute your website's content across multiple servers worldwide, reducing latency and improving load times for users in different regions.
  
        ### Monitoring and Testing
  
        We'll also cover tools and services for monitoring your website's performance and conducting load tests to identify bottlenecks.
  
        By following the tips in this article, you'll be able to optimize your website's performance and provide a faster, more enjoyable experience for your visitors.
      `,
      date: new Date('2023-09-20'),
    },
    {
      id: 7,
      title: 'The Importance of Accessibility in Web Development',
      image: 'article7.svg',
      subtitle: 'Making the web inclusive for everyone',
      content: `
        Web accessibility is not just a nice-to-have feature; it's a critical aspect of web development. In this article, we'll explore the importance of accessibility, including the benefits it brings to both users and businesses.
  
        ### Understanding Accessibility
  
        Accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and web applications. This includes individuals with visual, auditory, motor, and cognitive impairments.
  
        ### Legal Requirements
  
        Many countries have laws and regulations requiring websites to be accessible. We'll discuss some of these laws and the potential legal consequences of non-compliance.
  
        ### Improving User Experience
  
        Accessibility enhancements often lead to a better user experience for everyone. We'll explore how accessible design choices can benefit all users, not just those with disabilities.
  
        ### Practical Tips
  
        We'll provide practical tips and best practices for making your websites and applications more accessible, including proper HTML semantics, alternative text for images, and keyboard navigation.
  
        By the end of this article, you'll have a deeper understanding of why accessibility matters and how to integrate it into your web development workflow.
      `,
      date: new Date('2023-09-25'),
    },
    {
      id: 8,
      title: 'Building Progressive Web Apps (PWAs)',
      image: 'article8.svg',
      subtitle: 'Creating fast, reliable, and engaging web experiences',
      content: `
        Progressive Web Apps (PWAs) combine the best of web and mobile app experiences. They offer speed, offline capabilities, and engaging features. In this article, we'll explore the principles of PWAs and how to build them.
  
        ### Key PWA Features
  
        PWAs leverage technologies like service workers and manifest files to enable features such as offline access, push notifications, and home screen installation.
  
        ### Improved Performance
  
        PWAs are known for their exceptional performance, even on slow or unreliable networks. We'll delve into strategies for optimizing your PWA's performance.
  
        ### Building a Service Worker
  
        We'll guide you through the process of building a service worker, a critical component of PWAs that handles caching and enables offline functionality.
  
        ### App Installation and Push Notifications
  
        Learn how to prompt users to install your PWA on their device's home screen and implement push notifications to engage users even when they're not on your website.
  
        Whether you're building a new web app or upgrading an existing one, PWAs can enhance the user experience and increase user engagement.
      `,
      date: new Date('2023-09-30'),
    },
    {
      id: 9,
      title: 'Web Security Best Practices',
      image: 'article9.svg',
      subtitle: 'Protecting your web applications from threats',
      content: `
        Web security is paramount in today's digital landscape. With the increasing frequency of cyberattacks, securing your web applications is critical. In this article, we'll explore best practices for web security to protect your users and data.
  
        ### Understanding Common Threats
  
        We'll discuss common web security threats, including cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), and more.
  
        ### Secure Authentication and Authorization
  
        Proper authentication and authorization mechanisms are crucial for protecting user accounts and sensitive data. We'll cover secure user authentication and authorization practices.
  
        ### Input Validation
  
        Input validation is essential for preventing attacks like SQL injection and XSS. We'll provide guidance on how to validate user input securely.
  
        ### Secure Communication
  
        Learn about the importance of HTTPS and how to properly implement it to encrypt data in transit and protect against man-in-the-middle attacks.
  
        ### Security Testing
  
        We'll also explore tools and techniques for security testing, including vulnerability scanners and penetration testing.
  
        By implementing these web security best practices, you can significantly reduce the risk of security breaches and protect your web applications and users.
      `,
      date: new Date('2023-10-05'),
    },
    {
      id: 10,
      title: 'Web Development Trends for 2024',
      image: 'article10.svg',
      subtitle: 'Stay ahead of the curve with the latest trends',
      content: `
      The field of web development is continually evolving, and it's essential to stay updated with the latest trends and technologies. In this article, we'll take a glimpse into the future and explore the web development trends expected to shape 2024.

      ### Progressive Web Apps (PWAs)

      PWAs will continue to gain popularity in 2024, offering fast, offline-capable, and engaging web experiences. More businesses will adopt PWAs to enhance user engagement.

      ### WebAssembly

      WebAssembly (Wasm) is revolutionizing web development by enabling high-performance, low-level code execution in the browser. It opens the door to a wide range of applications, including gaming and multimedia.

      ### Serverless Computing

      Serverless architecture simplifies backend development by abstracting server management. Expect an increased focus on serverless solutions for web applications.

      ### Voice User Interfaces (VUIs)

      With the rise of smart speakers and voice assistants, VUIs are becoming more prevalent. Web developers will need to consider voice interactions as part of their design and development process.

      ### Augmented Reality (AR) and Virtual Reality (VR)

      AR and VR will continue to expand on the web. Developers will leverage technologies like WebXR to create immersive web experiences.

      ### Ethical Design and Development

      As data privacy and ethics gain importance, web developers will prioritize ethical design and development practices, ensuring user data protection and fair algorithms.

      ### Low-Code and No-Code Development

      The trend of low-code and no-code development platforms will empower individuals and businesses to create web applications without extensive coding knowledge.

      Stay ahead of the curve by embracing these trends and incorporating them into your web development projects in 2024.
    `,
      date: new Date('2023-10-10'),
    },
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article | null {
    const article = this.articles.find((x) => x.id == id);
    if (article) {
      return article;
    } else {
      return null;
    }
  }

  getLatestArticles(): Article[] {
    return this.articles.slice(0, 3);
  }
}
