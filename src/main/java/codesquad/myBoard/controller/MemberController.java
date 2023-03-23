package codesquad.myBoard.controller;

import codesquad.myBoard.domain.Member;
import codesquad.myBoard.service.MemberService;
import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/")
    public String home() { //TODO: 홈페이지 만들면 홈 컨트롤러에 넘겨줘야 함
        return "auth/log-in";
    }

    @GetMapping("/members/new")
    public String signUp() {
        return "members/sign-up";
    }

    @PostMapping("/members/new")
    public String create(SignUpForm form) throws SQLException {
        Member member = new Member();
        member.setId(form.getId());
        member.setPassword(form.getPassword());
        System.out.println("member.getId() = " + member.getId());
        System.out.println("member.getPassword() = " + member.getPassword());
        memberService.join(member);
        return "redirect:/";
    }

//    @GetMapping("/members")
//    public String list(Model model) {
//
//    }
}
