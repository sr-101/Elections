package cs336.elections.model;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="overallwebmentions")
public class OverallWebMention {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private BigInteger id;
	
	@Column(name="date")
	private String date;
	
	@Column(name="candidate")
	private String candidate;
	
	@Column(name="mentions")
	private BigInteger mentions;

	public OverallWebMention() {
	}

	public OverallWebMention(BigInteger id, String date, String candidate, BigInteger mentions) {
		this.id = id;
		this.date = date;
		this.candidate = candidate;
		this.mentions = mentions;
	}

	public BigInteger getId() {
		return id;
	}

	public void setId(BigInteger id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCandidate() {
		return candidate;
	}

	public void setCandidate(String candidate) {
		this.candidate = candidate;
	}

	public BigInteger getMentions() {
		return mentions;
	}

	public void setMentions(BigInteger mentions) {
		this.mentions = mentions;
	}

	@Override
	public String toString() {
		return "OverallWebMention [id=" + id + ", date=" + date + ", candidate=" + candidate
				+ ", mentions=" + mentions + "]";
	}

}
