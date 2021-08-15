package tech.geocodeapp.geocode.mission.response;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.validation.annotation.Validated;
import tech.geocodeapp.geocode.general.response.Response;
import tech.geocodeapp.geocode.mission.model.Mission;

import javax.validation.Valid;

/**
 * CreateMissionResponse
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-08-13T15:58:34.861Z[GMT]")

public class CreateMissionResponse extends Response {
  @JsonProperty("mission")
  private Mission mission = null;

  public CreateMissionResponse(boolean success, String message, Mission mission) {
    super(success, message);
    this.mission = mission;
  }

  public CreateMissionResponse mission(Mission mission) {
    this.mission = mission;
    return this;
  }

  /**
   * Get mission
   * @return mission
   **/
  @Schema(description = "")
  
    @Valid
    public Mission getMission() {
    return mission;
  }

  public void setMission(Mission mission) {
    this.mission = mission;
  }
}
