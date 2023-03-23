package codesquad.myBoard.repository;

import codesquad.myBoard.domain.Member;
import java.sql.SQLException;

public interface MemberRepository {

    Member save(Member member) throws SQLException; //TODO: 리턴 타입 String?
}
