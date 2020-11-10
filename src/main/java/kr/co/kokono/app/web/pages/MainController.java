package kr.co.kokono.app.web.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping({"/", "/login", "/join", "/card"})
    public String entry() {
        return "index";
    }
}
