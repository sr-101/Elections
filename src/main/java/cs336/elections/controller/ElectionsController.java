package cs336.elections.controller;

import java.util.ArrayList;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cs336.elections.model.OverallMediaMention;
import cs336.elections.model.OverallTVMention;
import cs336.elections.model.OverallWebMention;
import cs336.elections.model.TVNewsNetwork;
import cs336.elections.model.WordCloud;
import cs336.elections.queries.Queries;

@RestController
public class ElectionsController {

	@Autowired
	private Queries q;
	
	@RequestMapping(value = "/top10datesweb", method = RequestMethod.POST)
	public ArrayList<OverallWebMention> getTop10DatesWithMostWebMentions(@RequestBody String candidate){
		return q.top10DatesWithMostWebMentions(candidate);
	}
	
	@RequestMapping(value = "/top10datestv", method = RequestMethod.POST)
	public ArrayList<OverallTVMention> getTop10DatesWithMostTVMentions(@RequestBody String candidate){
		return q.top10DatesWithMostTVMentions(candidate);
	}
	
	@RequestMapping(value = "/allmediamentionsperday", method = RequestMethod.POST)
	public ArrayList<OverallMediaMention> allMediaMentionsPerDay(@RequestBody String candidate){
		return q.candidateMediaMentionsPerDay(candidate);
	}
	
	@RequestMapping(value = "/alltvmentionsperday", method = RequestMethod.POST)
	public ArrayList<OverallTVMention> allTVMentionsPerDay(@RequestBody String candidate){
		return q.candidateTVMentionsPerDay(candidate);
	}
	
	@RequestMapping(value = "/allwebmentionsperday", method = RequestMethod.POST)
	public ArrayList<OverallWebMention> allWebMentionsPerDay(@RequestBody String candidate){
		return q.candidateWebMentionsPerDay(candidate);
	}
	
	@RequestMapping(value = "/allcandidatemediamentions", method = RequestMethod.GET)
	public ArrayList<OverallMediaMention> allCandidateMediaMentions(){
		return q.allcandidateMediaMentions();
	}
	
	@RequestMapping(value = "/allcandidatewebmentions", method = RequestMethod.GET)
	public ArrayList<OverallWebMention> allCandidateWebMentions(){
		return q.allcandidateWebMentions();
	}
	
	@RequestMapping(value = "/allcandidatetvmentions", method = RequestMethod.GET)
	public ArrayList<OverallTVMention> allCandidateTVMentions(){
		return q.allcandidateTVMentions();
	}
	
	@RequestMapping(value = "/allcandidatemediamentionsperday", method = RequestMethod.GET)
	public ArrayList<OverallMediaMention> allCandidateMediaMentionsPerDay(){
		return q.allcandidateMediaMentionsPerDay();
	}
	
	@RequestMapping(value = "/allcandidatewebmentionsperday", method = RequestMethod.GET)
	public ArrayList<OverallWebMention> allCandidateWebMentionsPerDay(){
		return q.allcandidateWebMentionsPerDay();
	}
	
	@RequestMapping(value = "/allcandidatetvmentionsperday", method = RequestMethod.GET)
	public ArrayList<OverallTVMention> allCandidateTVMentionsPerDay(){
		return q.allcandidateTVMentionsPerDay();
	}
	
	@RequestMapping(value = "/allcandidatetvmentionspernetwork", method = RequestMethod.POST)
	public ArrayList<TVNewsNetwork> allCandidateTVMentionsPerNetwork(@RequestBody String network){
		return q.allcandidateTVMentionsPerNetwork(network);
	}
	
	@RequestMapping(value = "/candidatetvmentionspernetworkpermonthperyear", method = RequestMethod.POST)
	public ArrayList<TVNewsNetwork> candidateTVMentionsPerNetworkPerMonthPerYear(@RequestBody String candidate){
		return q.candidateTVMentionsPerNetworkPerMonthPerYear(candidate);
	}
	
	@RequestMapping(value = "/candidatetvmentionspernetworkpermonthperyearjson", method = RequestMethod.GET)
	public JSONObject candidateTVMentionsPerNetworkPerMonthPerYearJSON(){
		return q.candidateTVMentionsPerNetworkPerMonthPerYearJSON();
	}
	
	@RequestMapping(value = "/candidatetvmentionspermonthperyear", method = RequestMethod.POST)
	public ArrayList<OverallTVMention> candidateTVMentionsPerMonthPerYear(@RequestBody String candidate){
		return q.candidateTVMentionsPerMonthPerYear(candidate);
	}
	
	
	@RequestMapping(value = "/candidatewordcloud", method = RequestMethod.POST)
	public WordCloud candidateWordCloud(@RequestBody String parameters){
		String[] p=parameters.split(" ");
		return q.candidateWordCloud(p[0],p[1]+" "+p[2],p[3]);
	}
	
	@RequestMapping(value = "/averagewebmentionspermonth", method = RequestMethod.POST)
	public ArrayList<OverallWebMention> candidateWebMentionsPerMonth(@RequestBody String candidate){
		return q.averageCandidateWebMentionsPerMonth(candidate);
	}
	
	@RequestMapping(value = "/averagetvmentionspermonth", method = RequestMethod.POST)
	public ArrayList<OverallTVMention> candidateTVMentionsPerMonth(@RequestBody String candidate){
		return q.averageCandidateTVMentionsPerMonth(candidate);
	}
}
