package oslomet.webpro;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeiController {
    @GetMapping("/")
    public String hei(String navn){
        return "Hei verden "+navn;
    }
}

---------- MY NOTES -------------

/* What is Spring Boot?
- Spring Boot is a framework used to create stand-alone, production-grade Java-based applications.
  It's part of the larger Spring Framework, which is a popular framework for building
  enterprise-level applications in Java.

- Can be used with:
- IDE's (Integrated Development Environments): IntelliJ IDEA, Eclipse, Visual Studio Code,  NetBeans.
- Text Editors: Visual Studio Code, Sublime Text, Atom, Spring Tool Suite,  JBoss Developer Studio,
  Android Studio, Cloud-Based IDEs, IntelliJ IDEA Community Edition.
- Build Tools: Maven or Gradle.

* What is Net Beans?
- NetBeans is an open-source Integrated Development Environment (IDE) primarily used for Java development.
  It supports various programming languages, but it is best known for its strong support for Java applications.
  NetBeans provides a comprehensive set of tools to help developers create, debug, and manage applications,
  with a focus on ease of use and robust functionality.

* What is a bean in Sprong Boot?
- A bean is simply a Java object that is instantiated, configured, and managed by the Spring container.

- Defining a Bean in Spring Boot:
- 1. Using @Component Annotation
- 2. Using @Bean Annotation
- 3. Using @Service, @Repository, and @Controller: More in depth:
---> @Service: For service layer beans.
---> @Repository: For data access beans (DAO layer).
---> @Controller: For web controllers in Spring MVC.

- Scopes/Types of Beans in Spring:
- 1. Singleton Beans (Default)
- 2. Prototype Beans
- 3. Request, Session, and Global Session Scope (used in web applications)

*/




