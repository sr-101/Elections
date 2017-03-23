package cs336.elections.model;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tvnetworkids")
public class TVNetworkID {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private BigInteger id;
	
	@Column(name="network")
	private String network;
	
	public TVNetworkID() {
	}

	public TVNetworkID(BigInteger id, String network) {
		this.id = id;
		this.network = network;
	}

	public BigInteger getId() {
		return id;
	}

	public void setId(BigInteger id) {
		this.id = id;
	}

	public String getNetwork() {
		return network;
	}

	public void setNetwork(String network) {
		this.network = network;
	}

	@Override
	public String toString() {
		return "TVNetworkID [id=" + id + ", network=" + network + "]";
	}

}
