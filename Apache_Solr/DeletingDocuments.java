import java.io.IOException;    
  
import org.apache.Solr.client.Solrj.SolrClient;   
import org.apache.Solr.client.Solrj.SolrServerException;   
import org.apache.Solr.client.Solrj.impl.HttpSolrClient;   
import org.apache.Solr.common.SolrInputDocument;    
  
public class DeletingAllDocuments {   
   public static void main(String []args) throws SolrServerException, IOException {  
      //Preparing the Solr client   
      String urlString = "http://localhost:8983/Solr/my_core";   
      SolrClient Solr = new HttpSolrClient.Builder(urlString).build();     
        
      //Preparing the Solr document   
      SolrInputDocument doc = new SolrInputDocument();     
            
      //Deleting the documents from Solr   
      Solr.deleteByQuery("*");          
           
      //Saving the document   
      Solr.commit();   
      System.out.println("Documents deleted");   
   }   
}  