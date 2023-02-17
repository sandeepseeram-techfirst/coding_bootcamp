Import java.io.IOException;    
  
import org.apache.Solr.client.Solrj.SolrClient;   
import org.apache.Solr.client.Solrj.SolrServerException;   
import org.apache.Solr.client.Solrj.impl.HttpSolrClient;   
import org.apache.Solr.client.Solrj.request.UpdateRequest;   
import org.apache.Solr.client.Solrj.response.UpdateResponse;  
import org.apache.Solr.common.SolrInputDocument;    
  
public class UpdatingDocument {   
   public static void main(String args[]) throws SolrServerException, IOException {   
      //Preparing the Solr client   
      String urlString = "http://localhost:8983/Solr/my_core";   
      SolrClient Solr = new HttpSolrClient.Builder(urlString).build();     
        
      //Preparing the Solr document   
      SolrInputDocument doc = new SolrInputDocument();   
     
      UpdateRequest updateRequest = new UpdateRequest();    
      updateRequest.setAction( UpdateRequest.ACTION.COMMIT, false, false);      
      SolrInputDocument myDocumentInstantlycommited = new SolrInputDocument();    
        
      myDocumentInstantlycommited.addField("id", "002");   
      myDocumentInstantlycommited.addField("name", "Rahman");   
      myDocumentInstantlycommited.addField("age","27");   
      myDocumentInstantlycommited.addField("addr","hyderabad");   
        
      updateRequest.add( myDocumentInstantlycommited);    
      UpdateResponse rsp = updateRequest.process(Solr);   
      System.out.println("Documents Updated");   
   }   
}  