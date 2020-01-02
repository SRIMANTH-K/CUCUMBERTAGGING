package myrunner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		features="C:\\Users\\srima\\workspace1\\CCUCMBERTAGGING\\src\\test\\java\\FeatureFile\\Tagging.feature"
		
		,
		glue= {"stepDefinition"},
		
		monochrome=true,
		tags={"@SmokeTest,@RegressionTest,@End2EndTest"},
		
		dryRun=false,
		
		format={"pretty",
                "html:test-output",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"}
		//tags={"@SmokeTest"}
		
		)






public class TestRunner {

}
