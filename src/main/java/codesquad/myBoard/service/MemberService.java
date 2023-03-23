package codesquad.myBoard.service;

import codesquad.myBoard.domain.Member;
import codesquad.myBoard.repository.MemberRepository;
import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member join(Member member) throws SQLException {
        // TODO: 중복 ID 예외처리
        memberRepository.save(member);
        return member;
    }

}
