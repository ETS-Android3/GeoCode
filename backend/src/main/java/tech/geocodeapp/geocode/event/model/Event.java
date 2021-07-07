package tech.geocodeapp.geocode.event.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import tech.geocodeapp.geocode.geocode.model.GeoPoint;
import tech.geocodeapp.geocode.leaderboard.model.Leaderboard;

import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Event
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2021-07-07T10:35:03.795Z[GMT]")


public class Event {

    @JsonProperty( "id" )
    private UUID id = null;

    @JsonProperty( "name" )
    private String name = null;

    @JsonProperty( "description" )
    private String description = null;

    @JsonProperty( "location" )
    private GeoPoint location = null;

    @JsonProperty( "leaderboard" )
    private Leaderboard leaderboard = null;

    public Event id( UUID id ) {

        this.id = id;
        return this;
    }

    /**
     * Get id
     *
     * @return id
     **/
    @Schema( required = true, description = "" )
    @NotNull

    @Valid
    public UUID getId() {

        return id;
    }

    public void setId( UUID id ) {

        this.id = id;
    }

    public Event name( String name ) {

        this.name = name;
        return this;
    }

    /**
     * Get name
     *
     * @return name
     **/
    @Schema( required = true, description = "" )
    @NotNull

    public String getName() {

        return name;
    }

    public void setName( String name ) {

        this.name = name;
    }

    public Event description( String description ) {

        this.description = description;
        return this;
    }

    /**
     * Get description
     *
     * @return description
     **/
    @Schema( required = true, description = "" )
    @NotNull

    public String getDescription() {

        return description;
    }

    public void setDescription( String description ) {

        this.description = description;
    }

    public Event location( GeoPoint location ) {

        this.location = location;
        return this;
    }

    /**
     * Get location
     *
     * @return location
     **/
    @Schema( required = true, description = "" )
    @NotNull

    @Valid
    public GeoPoint getLocation() {

        return location;
    }

    public void setLocation( GeoPoint location ) {

        this.location = location;
    }

    public Event leaderboard( Leaderboard leaderboard ) {

        this.leaderboard = leaderboard;
        return this;
    }

    /**
     * Get leaderboard
     *
     * @return leaderboard
     **/
    @Schema( required = true, description = "" )
    @NotNull

    @Valid
    public Leaderboard getLeaderboard() {

        return leaderboard;
    }

    public void setLeaderboard( Leaderboard leaderboard ) {

        this.leaderboard = leaderboard;
    }


    @Override
    public boolean equals( java.lang.Object o ) {

        if ( this == o ) {
            return true;
        }
        if ( o == null || getClass() != o.getClass() ) {
            return false;
        }
        Event event = ( Event ) o;
        return Objects.equals( this.id, event.id ) &&
                Objects.equals( this.name, event.name ) &&
                Objects.equals( this.description, event.description ) &&
                Objects.equals( this.location, event.location ) &&
                Objects.equals( this.leaderboard, event.leaderboard );
    }

    @Override
    public int hashCode() {

        return Objects.hash( id, name, description, location, leaderboard );
    }

    @Override
    public String toString() {

        StringBuilder sb = new StringBuilder();
        sb.append( "class Event {\n" );

        sb.append( "    id: " ).append( toIndentedString( id ) ).append( "\n" );
        sb.append( "    name: " ).append( toIndentedString( name ) ).append( "\n" );
        sb.append( "    description: " ).append( toIndentedString( description ) ).append( "\n" );
        sb.append( "    location: " ).append( toIndentedString( location ) ).append( "\n" );
        sb.append( "    leaderboard: " ).append( toIndentedString( leaderboard ) ).append( "\n" );
        sb.append( "}" );
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString( java.lang.Object o ) {

        if ( o == null ) {
            return "null";
        }
        return o.toString().replace( "\n", "\n    " );
    }

}
