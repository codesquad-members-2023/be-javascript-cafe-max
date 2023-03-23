package codesquad.myBoard.repository;

import codesquad.myBoard.domain.Member;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class JDBCMemberRepository implements MemberRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JDBCMemberRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public Member save(Member member) throws SQLException {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(jdbcTemplate);
        jdbcInsert.withTableName("member").usingColumns("id", "password");

        Map<String, String> parameters = new HashMap<>();
        parameters.put("id", member.getId());
        parameters.put("password", member.getPassword());

        jdbcInsert.execute(new MapSqlParameterSource(parameters));
//        String sql = "insert into member(name, password) values(?, ?)";
        return member;
    }

}
