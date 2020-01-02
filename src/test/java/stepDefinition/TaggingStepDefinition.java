package stepDefinition;



import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggingStepDefinition {

	WebDriver driver;


	//@SmokeTest
	@Given("^user enter valid username and password$")
	public void user_enter_valid_username_and_password() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver_win32\\chromedriver.exe");

		driver = new ChromeDriver();
		Thread.sleep(5000);
		System.out.println("Chrome Browser Opened");
		driver.navigate().to("https://opensource-demo.orangehrmlive.com/");

		driver.manage().window().maximize();

		driver.findElement(By.xpath("//*[@id='txtUsername']")).click();
		driver.findElement(By.xpath("//*[@id='txtUsername']")).sendKeys("Admin");

		driver.findElement(By.xpath("//*[@id='txtPassword']")).click();

		driver.findElement(By.xpath("//*[@id='txtPassword']")).sendKeys("admin123");
	}

	@Then("^this is valid test$")
	public void this_is_valid_test()  {

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		String title = driver.getTitle();
		System.out.println("This is Valid Test");
		System.out.println("Title of the webpage is :"+ title);
		Assert.assertEquals("OrangeHrm", "OrangeHrm");
	}

	@And("^close the browser$")
	public void close_the_browser()  {

		driver.close();
	}


	//@RegressionTest
	@Given("^person is login page$")
	public void person_is_login_page()  {

		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver_win32\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.navigate().to("https://demo.guru99.com/V4/");

		driver.manage().window().maximize();
	}

	@When("^title of the page is Guruwebpage$")
	public void title_of_the_page_is_Guruwebpage() {


		String title= driver.getTitle();

		System.out.println("Title of  guru99 webpage is:"+ title);
	}

	@Then("^enter the valid username and password$")
	public void enter_the_valid_username_and_password()  {

		driver.findElement(By.xpath("//input[@name='uid']")).click();

		driver.findElement(By.xpath("//input[@name='uid']")).sendKeys("Admin");

		driver.findElement(By.xpath("//input[@name='password']")).click();

		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("admin123");


	}

	@Then("^quit the browser$")
	public void quit_the_browser()  {

		System.out.println("Successfully closed guru99 webpage");
		driver.close();
	}



	//@End2EndTest
	@Given("^user is login page$")
	public void user_is_login_page(){

		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver_win32\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.navigate().to("https://demo.guru99.com/V4/");

		driver.manage().window().maximize();
	}

	@Then("^user enter invalid username and password$")	
	public void user_enter_invalid_username_and_password() throws InterruptedException{

		driver.findElement(By.xpath("//input[@name='uid']")).click();

		driver.findElement(By.xpath("//input[@name='uid']")).sendKeys("Admin");

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		
		//driver.findElement(By.xpath("//input[@name='password']")).click();

		//driver.findElement(By.xpath("//input[@name='password']")).sendKeys("admin123");


	}
	@And("^Get text of Alert box$")
	public void Get_text_of_Alert_box() throws InterruptedException{

		driver.findElement(By.xpath("//input[@name='btnLogin']")).click();
		Thread.sleep(5000);
		
		Alert alert = driver.switchTo().alert();
		String alert_message = alert.getText();
		alert.accept();
		Thread.sleep(5000);
		

		System.out.println("Alert messaage of text box is :"+   alert_message);
	}


	@And("^close browser$")

	public void close_browser() {
		
		
		driver.close();
		System.out.println("Scucessfully Closed");

	}


}