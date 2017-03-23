package cs336.elections.model;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="wordclouds")
public class WordCloud {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private BigInteger id;
	
	@Column(name="date")
	private String date;
	
	@Column(name="candidate")
	private String candidate;
	
	@Column(name="webortv")
	private String webortv;
	
	@Column(name="imageurl")
	private String imageurl;

	public WordCloud() {
	}

	public WordCloud(BigInteger id, String date, String candidate, String webortv, String imageurl) {
		this.id = id;
		this.date = date;
		this.candidate = candidate;
		this.webortv = webortv;
		this.imageurl = imageurl;
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

	public String getWebortv() {
		return webortv;
	}

	public void setWebortv(String webortv) {
		this.webortv = webortv;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	@Override
	public String toString() {
		return "WordCloud [id=" + id + ", date=" + date + ", candidate=" + candidate + ", webortv=" + webortv
				+ ", imageurl=" + imageurl + "]";
	}
	
}
