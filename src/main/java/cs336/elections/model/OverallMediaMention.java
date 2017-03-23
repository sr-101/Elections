package cs336.elections.model;

import java.math.BigInteger;

public class OverallMediaMention {
	
	private String date;
	
	private String candidate;
	
	private BigInteger mentions;

	public OverallMediaMention() {
	}

	public OverallMediaMention(String date, String candidate, BigInteger mentions) {
		this.date = date;
		this.candidate = candidate;
		this.mentions = mentions;
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
		return "OverallMediaMention [date=" + date + ", candidate=" + candidate
				+ ", mentions=" + mentions + "]";
	}

}
