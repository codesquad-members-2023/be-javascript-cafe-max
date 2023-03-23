//package codesquad.myBoard;
//
//import codesquad.myBoard.repository.JDBCMemberRepository;
//import codesquad.myBoard.repository.MemberRepository;
//import codesquad.myBoard.service.MemberService;
//import javax.sql.DataSource;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class SpringConfig {
//
//    private DataSource dataSource;
//
//    public SpringConfig(DataSource dataSource) {
//        this.dataSource = dataSource;
//    }
//
//    @Bean
//    public MemberService memberService() {
//        return new MemberService(memberRepository());
//    }
//
//    @Bean
//    public MemberRepository memberRepository() {
//        return new JDBCMemberRepository(dataSource);
//    }
//}
