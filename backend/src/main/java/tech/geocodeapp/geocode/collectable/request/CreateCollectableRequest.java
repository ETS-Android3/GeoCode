package tech.geocodeapp.geocode.collectable.request;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * CreateCollectableRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-06-17T08:18:28.046Z[GMT]")


public class CreateCollectableRequest   {
  @JsonProperty("collectableTypeId")
  private UUID collectableTypeId = null;
  @JsonProperty("createMission")
  private boolean createMission = false;

  public CreateCollectableRequest() {
    createMission = false;
    collectableTypeId = null;
  }

  public CreateCollectableRequest collectableTypeId(UUID collectableTypeId) {
    this.collectableTypeId = collectableTypeId;
    createMission = false;
    return this;
  }

  public CreateCollectableRequest(UUID collectableTypeId, boolean createMission) {
    this.collectableTypeId = collectableTypeId;
    this.createMission = createMission;
  }

  public boolean isCreateMission() {
    return createMission;
  }

  public void setCreateMission(boolean createMission) {
    this.createMission = createMission;
  }

  /**
   * Get collectableTypeId
   * @return collectableTypeId
   **/
  @Schema(required = true, description = "")
      @NotNull

    @Valid
    public UUID getCollectableTypeId() {
    return collectableTypeId;
  }

  public void setCollectableTypeId(UUID collectableTypeId) {
    this.collectableTypeId = collectableTypeId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateCollectableRequest createCollectableRequest = (CreateCollectableRequest) o;
    return Objects.equals(this.collectableTypeId, createCollectableRequest.collectableTypeId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(collectableTypeId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateCollectableRequest {\n");
    
    sb.append("    collectableTypeId: ").append(toIndentedString(collectableTypeId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
