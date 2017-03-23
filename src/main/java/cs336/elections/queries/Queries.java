package cs336.elections.queries;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cs336.elections.model.OverallMediaMention;
import cs336.elections.model.OverallTVMention;
import cs336.elections.model.OverallWebMention;
import cs336.elections.model.TVNewsNetwork;
import cs336.elections.model.WordCloud;

@Repository
@Transactional
public class Queries {

	@Autowired
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallWebMention> top10DatesWithMostWebMentions(String candidate){
		String sql="Select * From overallwebmentions t1 Where t1.candidate="+"'"+candidate+"'"+" Order by t1.mentions desc limit 10";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallWebMention.class));
		ArrayList<OverallWebMention> top10dates=(ArrayList<OverallWebMention>) q.list();
		for(OverallWebMention t:top10dates){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMMdd");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM dd yyyy");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		
		return top10dates;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> top10DatesWithMostTVMentions(String candidate){
		String sql="Select * From overalltvmentions t1 Where t1.candidate="+"'"+candidate+"'"+" Order by t1.mentions desc limit 10";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> top10dates=(ArrayList<OverallTVMention>) q.list();
		for(OverallTVMention t:top10dates){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMMdd");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM dd yyyy");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		
		return top10dates;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallMediaMention> candidateMediaMentionsPerDay(String candidate){
		String sql="Select t1.date,t1.candidate,t1.mentions+t2.mentions as mentions From overallwebmentions t1, overalltvmentions t2 "+
				"where t1.candidate="+"'"+candidate+"'"+" AND t1.candidate=t2.candidate AND t1.date=t2.date";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallMediaMention.class));
		ArrayList<OverallMediaMention> allmediaperday=(ArrayList<OverallMediaMention>) q.list();
		return allmediaperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> candidateTVMentionsPerDay(String candidate){
		String sql="Select t1.date,t1.candidate,t1.mentions From overalltvmentions t1 "+
				"where t1.candidate="+"'"+candidate+"'";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> alltvperday=(ArrayList<OverallTVMention>) q.list();
		return alltvperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallWebMention> candidateWebMentionsPerDay(String candidate){
		String sql="Select t1.date,t1.candidate,t1.mentions From overallwebmentions t1 "+
				"where t1.candidate="+"'"+candidate+"'";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallWebMention.class));
		ArrayList<OverallWebMention> allwebperday=(ArrayList<OverallWebMention>) q.list();
		return allwebperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallMediaMention> allcandidateMediaMentions(){
		String sql="Select t1.candidate,cast(sum(t1.mentions+t2.mentions) as SIGNED) as mentions From overallwebmentions t1, overalltvmentions t2 "+
				"where t1.candidate=t2.candidate AND t1.date=t2.date group by t1.candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallMediaMention.class));
		ArrayList<OverallMediaMention> allcandidatemedia=(ArrayList<OverallMediaMention>) q.list();
		return allcandidatemedia;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallWebMention> allcandidateWebMentions(){
		String sql="Select t1.candidate,cast(sum(t1.mentions) as SIGNED) as mentions From overallwebmentions t1 group by t1.candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallWebMention.class));
		ArrayList<OverallWebMention> allcandidateweb=(ArrayList<OverallWebMention>) q.list();
		return allcandidateweb;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> allcandidateTVMentions(){
		String sql="Select t1.candidate,cast(sum(t1.mentions) as SIGNED) as mentions From overalltvmentions t1 group by t1.candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> allcandidatetv=(ArrayList<OverallTVMention>) q.list();
		return allcandidatetv;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallMediaMention> allcandidateMediaMentionsPerDay(){
		String sql="Select t1.date,t1.candidate,t1.mentions+t2.mentions as mentions From overallwebmentions t1, overalltvmentions t2 where t1.candidate=t2.candidate AND t1.date=t2.date;";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallMediaMention.class));
		ArrayList<OverallMediaMention> allcandidatemediaperday=(ArrayList<OverallMediaMention>) q.list();
		return allcandidatemediaperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> allcandidateTVMentionsPerDay(){
		String sql="Select t1.date,t1.candidate,t1.mentions as mentions From overalltvmentions t1";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> allcandidatetvperday=(ArrayList<OverallTVMention>) q.list();
		return allcandidatetvperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallWebMention> allcandidateWebMentionsPerDay(){
		String sql="Select t1.date,t1.candidate,t1.mentions as mentions From overallwebmentions t1";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallWebMention.class));
		ArrayList<OverallWebMention> allcandidatewebperday=(ArrayList<OverallWebMention>) q.list();
		return allcandidatewebperday;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<TVNewsNetwork> allcandidateTVMentionsPerNetwork(String network){
		String sql="Select t1.candidate,cast(sum(t1.mentions) as SIGNED) as mentions From tvnewsnetworks t1 Where network="+"'"+network+"'"+" group by t1.candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(TVNewsNetwork.class));
		ArrayList<TVNewsNetwork> allcandidateTVMentionsPerNetwork=(ArrayList<TVNewsNetwork>) q.list();
		return allcandidateTVMentionsPerNetwork;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<TVNewsNetwork> candidateTVMentionsPerNetworkPerMonthPerYear(String candidate){
		String sql="select left(date,6) as date,candidate,network,cast(sum(mentions) as SIGNED) as mentions "
				+ "from tvnewsnetworks where candidate="+"'"+candidate+"'"+"group by left(date, 4),left(right(date, 4),2),network,candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(TVNewsNetwork.class));
		ArrayList<TVNewsNetwork> allcandidateTVMentionsPerNetwork=(ArrayList<TVNewsNetwork>) q.list();
		for(TVNewsNetwork t:allcandidateTVMentionsPerNetwork){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMM");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM yyyy");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		return allcandidateTVMentionsPerNetwork;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> candidateTVMentionsPerMonthPerYear(String candidate){
		String sql="select left(date,6) as date,candidate,cast(sum(mentions) as SIGNED) as mentions "
				+ "from overalltvmentions where candidate="+"'"+candidate+"'"+"group by left(date, 4),left(right(date, 4),2),candidate";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> allcandidateTVMentionsPerMonth=(ArrayList<OverallTVMention>) q.list();
		for(OverallTVMention t:allcandidateTVMentionsPerMonth){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMM");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM yyyy");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		return allcandidateTVMentionsPerMonth;
	}
	
	@SuppressWarnings("unchecked")
	public JSONObject candidateTVMentionsPerNetworkPerMonthPerYearJSON(){
		String sql="select left(date,6) as date,candidate,network,cast(sum(mentions) as SIGNED) as mentions "
				+ "from tvnewsnetworks group by left(date, 4),left(right(date, 4),2),candidate,network";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(TVNewsNetwork.class));
		ArrayList<TVNewsNetwork> arr=(ArrayList<TVNewsNetwork>) q.list();
		
		JSONObject chart=new JSONObject();
		HashMap<String,String> hm=new HashMap<String,String>();
		hm.put("caption", "Comparison of Mentions By Network");
		hm.put("xAxisname", "Networks");
		hm.put("yAxisName", "Mentions");
		hm.put("xAxisNameFontSize", "12");
		hm.put("yAxisNameFontSize", "12");
		hm.put("plotFillAlpha", "80");
		hm.put("baseFontColor", "#333333");
		hm.put("baseFont", "Helvetica Neue,Arial");
		hm.put("captionFontSize", "14");
		hm.put("subcaptionFontSize", "14");
		hm.put("subcaptionFontBold", "0");
		hm.put("showBorder", "0");
		hm.put("bgColor", "#ffffff");
		hm.put("showShadow", "0");
		hm.put("canvasBgColor", "#ffffff");
		hm.put("canvasBorderAlpha", "0");
		hm.put("divlineAlpha", "100");
		hm.put("divlineColor", "#999999");
		hm.put("divlineThickness", "1");
		hm.put("divLineIsDashed", "1");
		hm.put("divLineDashLen", "1");
		hm.put("divLineGapLen", "1");
		hm.put("usePlotGradientColor", "0");
		hm.put("showplotborder", "0");
		hm.put("valueFontColor", "#ffffff");
		hm.put("placeValuesInside", "1");
		hm.put("showHoverEffect", "1");
		hm.put("rotateValues", "1");
		hm.put("showXAxisLine", "1");
		hm.put("xAxisLineThickness", "1");
		hm.put("xAxisLineColor", "#999999");
		hm.put("showAlternateHGridColor", "0");
		hm.put("legendBgAlpha", "0");
		hm.put("legendBorderAlpha", "0");
		hm.put("legendShadow", "0");
		hm.put("legendItemFontSize", "10");
		hm.put("legendItemFontColor", "#666666");
		chart.putAll(hm);
		JSONArray linkeddata=new JSONArray();
		JSONObject ld=new JSONObject();
		
		for(int i=0;i<arr.size();i+=9){
			String dateStr = arr.get(i).getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMM");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM yyyy");
			dateStr = destDf.format(date);
			arr.get(i).setDate(dateStr);
			
			Set<String> dates=new HashSet<String>();
			dates.add(dateStr);
			
			JSONObject j=new JSONObject();
			j.put("id",arr.get(i).getDate()+""+arr.get(i).getCandidate());
			JSONObject k=new JSONObject();
			k.put("chart", chart);
			JSONArray l=new JSONArray();
			
			for(int z=0;z<9;z++){
				JSONObject m=new JSONObject();
				m.put("label",arr.get(i+z).getNetwork());
				m.put("value",arr.get(i+z).getMentions());
				l.add(m);
			}
			k.put("data", l);
	
			j.put("linkedchart", k);
			linkeddata.add(j);
			ld.put("linkeddata",linkeddata);
			
		}
		return ld;
	}
	
	public WordCloud candidateWordCloud(String webortv, String candidate, String date){
		String sql="Select wc.imageurl From wordclouds wc where webortv="+"'"+webortv+"'"+" and candidate="+"'"+candidate+"'"+" and date="+"'"+date+"'";
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(WordCloud.class));
		WordCloud candidateWordCloud=(WordCloud) q.uniqueResult();
		return candidateWordCloud;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallWebMention> averageCandidateWebMentionsPerMonth(String candidate){
		String sql="select left(date,6) as date,candidate, cast(sum(mentions)/count(mentions) as signed) as mentions "
				+ "from overallwebmentions where candidate="+"'"+candidate+"'"+" group by left(right(date, 4),2), candidate"; 
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallWebMention.class));
		ArrayList<OverallWebMention> allcandidateWebMentionsPerMonth=(ArrayList<OverallWebMention>) q.list();
		for(OverallWebMention t:allcandidateWebMentionsPerMonth){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMM");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		return allcandidateWebMentionsPerMonth;
	}
	
	@SuppressWarnings("unchecked")
	public ArrayList<OverallTVMention> averageCandidateTVMentionsPerMonth(String candidate){
		String sql="select left(date,6) as date,candidate, cast(sum(mentions)/count(mentions) as signed) as mentions "
				+ "from overalltvmentions where candidate="+"'"+candidate+"'"+" group by left(right(date, 4),2), candidate"; 
		Session s=sessionFactory.getCurrentSession();
		Query q=s.createSQLQuery(sql).setResultTransformer(Transformers.aliasToBean(OverallTVMention.class));
		ArrayList<OverallTVMention> allcandidateTVMentionsPerMonth=(ArrayList<OverallTVMention>) q.list();
		for(OverallTVMention t:allcandidateTVMentionsPerMonth){
			String dateStr = t.getDate();
			DateFormat srcDf = new SimpleDateFormat("yyyyMM");
			Date date = null;
			try {
				date = srcDf.parse(dateStr);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			DateFormat destDf = new SimpleDateFormat("MMMM");
			dateStr = destDf.format(date);
			t.setDate(dateStr);
		}
		return allcandidateTVMentionsPerMonth;
	}
	
	
}
