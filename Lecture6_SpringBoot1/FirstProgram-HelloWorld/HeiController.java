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

-  Can be used with:
- IDE's (Integrated Development Environments): IntelliJ IDEA, Eclipse, Visual Studio Code,  NetBeans.
- Text Editors: Visual Studio Code, Sublime Text, Atom, Spring Tool Suite,  JBoss Developer Studio,
  Android Studio, Cloud-Based IDEs, IntelliJ IDEA Community Edition.
- Build Tools: Maven or Gradle.

 // * What is Net Beans?

// * What is a bean in Sprong Boot?

 */
 */



